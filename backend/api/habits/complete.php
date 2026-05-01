<?php
// backend/api/habits/complete.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$data = getRequestBody();

if (empty($data['habit_id'])) {
    jsonResponse(["error" => "habit_id is required"], 400);
}

$habitId = (int)$data['habit_id'];
$today = date('Y-m-d');
$db = getDB();

// Verify habit belongs to user — also fetch frequency so we know how to handle it
$stmt = $db->prepare("SELECT id, frequency FROM pf_habits WHERE id = ? AND user_id = ?");
$stmt->execute([$habitId, $userId]);
$habit = $stmt->fetch();
if (!$habit) {
    jsonResponse(["error" => "Habit not found"], 404);
}

$frequency = $habit['frequency'] ?? 'daily';

// ─── Prevent duplicate completions within the current period ────────────────
if ($frequency === 'weekly') {
    // For weekly: block if completed at any point in the last 7 days
    $stmt = $db->prepare("
        SELECT MAX(completed_date) AS last_done
        FROM pf_habit_completions
        WHERE habit_id = ?
    ");
    $stmt->execute([$habitId]);
    $row = $stmt->fetch();
    if ($row['last_done'] !== null) {
        $daysSince = (int)((strtotime($today) - strtotime($row['last_done'])) / 86400);
        if ($daysSince < 7) {
            $nextDue = date('Y-m-d', strtotime($row['last_done'] . ' +7 days'));
            jsonResponse([
                "error" => "Already completed this week — next due on " . $nextDue
            ], 409);
        }
    }
} else {
    // For daily: block if completed today
    $stmt = $db->prepare("SELECT id FROM pf_habit_completions WHERE habit_id = ? AND completed_date = ?");
    $stmt->execute([$habitId, $today]);
    if ($stmt->fetch()) {
        jsonResponse(["error" => "Already completed today"], 409);
    }
}

try {
    $db->beginTransaction();

    // Insert completion record
    $stmt = $db->prepare("INSERT INTO pf_habit_completions (habit_id, user_id, completed_date) VALUES (?, ?, ?)");
    $stmt->execute([$habitId, $userId, $today]);

    // ─── Update streak based on frequency ────────────────────────────────────
    $stmt = $db->prepare("SELECT current_streak, longest_streak, last_completed_date FROM pf_streaks WHERE habit_id = ? AND user_id = ?");
    $stmt->execute([$habitId, $userId]);
    $streak = $stmt->fetch();

    $newStreak = 1; // default: first completion or streak broken

    if ($streak && $streak['last_completed_date']) {
        $daysSinceLast = (int)((strtotime($today) - strtotime($streak['last_completed_date'])) / 86400);

        if ($frequency === 'weekly') {
            // Weekly streak continues if the gap is < 14 days (one week's grace for the next period)
            // In other words: you did it last week, now you did it this week = streak +1
            if ($daysSinceLast >= 1 && $daysSinceLast <= 14) {
                $newStreak = $streak['current_streak'] + 1;
            } else {
                $newStreak = 1; // gap too long, streak broken
            }
        } else {
            // Daily: yesterday = streak continues, today already handled by duplicate check
            $yesterday = date('Y-m-d', strtotime('-1 day'));
            if ($streak['last_completed_date'] === $yesterday) {
                $newStreak = $streak['current_streak'] + 1;
            } else {
                $newStreak = 1;
            }
        }
    }

    $longestStreak = $streak ? max((int)$streak['longest_streak'], $newStreak) : $newStreak;

    if ($streak) {
        $stmt = $db->prepare("UPDATE pf_streaks SET current_streak = ?, longest_streak = ?, last_completed_date = ? WHERE habit_id = ? AND user_id = ?");
        $stmt->execute([$newStreak, $longestStreak, $today, $habitId, $userId]);
    } else {
        // Create a new streak record if none existed
        $stmt = $db->prepare("INSERT INTO pf_streaks (habit_id, user_id, current_streak, longest_streak, last_completed_date) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$habitId, $userId, $newStreak, $longestStreak, $today]);
    }

    // ─── Award XP to pet ─────────────────────────────────────────────────────
    $xpGain = 10;
    $stmt = $db->prepare("UPDATE pf_pet_status SET xp = xp + ? WHERE user_id = ?");
    $stmt->execute([$xpGain, $userId]);

    // Check for level-up (every 50 XP)
    $stmt = $db->prepare("SELECT xp, level FROM pf_pet_status WHERE user_id = ?");
    $stmt->execute([$userId]);
    $pet = $stmt->fetch();

    $newLevel = floor($pet['xp'] / 50) + 1;
    if ($newLevel > $pet['level']) {
        $stage = 'puppy';
        if ($newLevel >= 8) $stage = 'dog';
        elseif ($newLevel >= 4) $stage = 'teen';

        $stmt = $db->prepare("UPDATE pf_pet_status SET level = ?, stage = ? WHERE user_id = ?");
        $stmt->execute([$newLevel, $stage, $userId]);
    }

    $db->commit();

    // ─── Check for new achievements ──────────────────────────────────────────
    $achStats = [];

    $stmt = $db->prepare("SELECT COUNT(*) as total FROM pf_habit_completions WHERE user_id = ?");
    $stmt->execute([$userId]);
    $achStats['completions'] = (int)$stmt->fetch()['total'];

    $stmt = $db->prepare("SELECT MAX(current_streak) as best FROM pf_streaks WHERE user_id = ?");
    $stmt->execute([$userId]);
    $achStats['streak'] = (int)($stmt->fetch()['best'] ?? 0);

    $stmt = $db->prepare("SELECT COUNT(*) as total FROM pf_habits WHERE user_id = ?");
    $stmt->execute([$userId]);
    $achStats['habits_created'] = (int)$stmt->fetch()['total'];

    $stmt = $db->prepare("SELECT level FROM pf_pet_status WHERE user_id = ?");
    $stmt->execute([$userId]);
    $achStats['level'] = (int)($stmt->fetch()['level'] ?? 1);

    $stmt = $db->prepare("SELECT COUNT(DISTINCT completed_date) as days FROM pf_habit_completions WHERE user_id = ?");
    $stmt->execute([$userId]);
    $achStats['days_active'] = (int)$stmt->fetch()['days'];

    $stmt = $db->prepare("
        SELECT a.* FROM pf_achievements a
        WHERE a.id NOT IN (SELECT achievement_id FROM pf_user_achievements WHERE user_id = ?)
    ");
    $stmt->execute([$userId]);
    $unearned = $stmt->fetchAll();

    $newAchievements = [];
    foreach ($unearned as $ach) {
        $type = $ach['requirement_type'];
        $val = (int)$ach['requirement_value'];
        if (isset($achStats[$type]) && $achStats[$type] >= $val) {
            $stmt = $db->prepare("INSERT INTO pf_user_achievements (user_id, achievement_id) VALUES (?, ?)");
            $stmt->execute([$userId, $ach['id']]);
            if ((int)$ach['xp_reward'] > 0) {
                $stmt = $db->prepare("UPDATE pf_pet_status SET xp = xp + ? WHERE user_id = ?");
                $stmt->execute([(int)$ach['xp_reward'], $userId]);
            }
            $newAchievements[] = ['name' => $ach['name'], 'xp_reward' => (int)$ach['xp_reward']];
        }
    }

    jsonResponse([
        "message" => $frequency === 'weekly' ? "Weekly habit completed!" : "Habit completed!",
        "streak" => $newStreak,
        "xp_gained" => $xpGain,
        "frequency" => $frequency,
        "new_achievements" => $newAchievements
    ]);

} catch (Exception $e) {
    $db->rollBack();
    jsonResponse(["error" => "Failed to complete habit"], 500);
}
