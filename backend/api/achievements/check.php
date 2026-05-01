<?php
// backend/api/achievements/check.php
// Called internally after habit completion to check for new achievements
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

// Gather all user stats
$stats = [];

// Total completions
$stmt = $db->prepare("SELECT COUNT(*) as total FROM pf_habit_completions WHERE user_id = ?");
$stmt->execute([$userId]);
$stats['completions'] = (int)$stmt->fetch()['total'];

// Best streak across all habits
$stmt = $db->prepare("SELECT MAX(current_streak) as best FROM pf_streaks WHERE user_id = ?");
$stmt->execute([$userId]);
$stats['streak'] = (int)($stmt->fetch()['best'] ?? 0);

// Total habits created
$stmt = $db->prepare("SELECT COUNT(*) as total FROM pf_habits WHERE user_id = ?");
$stmt->execute([$userId]);
$stats['habits_created'] = (int)$stmt->fetch()['total'];

// Pet level
$stmt = $db->prepare("SELECT level FROM pf_pet_status WHERE user_id = ?");
$stmt->execute([$userId]);
$stats['level'] = (int)($stmt->fetch()['level'] ?? 1);

// Days active (unique days with at least one completion)
$stmt = $db->prepare("SELECT COUNT(DISTINCT completed_date) as days FROM pf_habit_completions WHERE user_id = ?");
$stmt->execute([$userId]);
$stats['days_active'] = (int)$stmt->fetch()['days'];

// Get all achievements not yet earned by this user
$stmt = $db->prepare("
    SELECT a.* FROM pf_achievements a
    WHERE a.id NOT IN (
        SELECT achievement_id FROM pf_user_achievements WHERE user_id = ?
    )
");
$stmt->execute([$userId]);
$unearned = $stmt->fetchAll();

$newlyEarned = [];

foreach ($unearned as $achievement) {
    $type = $achievement['requirement_type'];
    $value = (int)$achievement['requirement_value'];

    if (isset($stats[$type]) && $stats[$type] >= $value) {
        // User meets the requirement — award the achievement
        $stmt = $db->prepare("INSERT INTO pf_user_achievements (user_id, achievement_id) VALUES (?, ?)");
        $stmt->execute([$userId, $achievement['id']]);

        // Award bonus XP
        $xpReward = (int)$achievement['xp_reward'];
        if ($xpReward > 0) {
            $stmt = $db->prepare("UPDATE pf_pet_status SET xp = xp + ? WHERE user_id = ?");
            $stmt->execute([$xpReward, $userId]);
        }

        $newlyEarned[] = [
            'id' => (int)$achievement['id'],
            'name' => $achievement['name'],
            'description' => $achievement['description'],
            'icon' => $achievement['icon'],
            'badge_color' => $achievement['badge_color'],
            'xp_reward' => $xpReward,
        ];
    }
}

jsonResponse([
    "new_achievements" => $newlyEarned,
    "total_new" => count($newlyEarned)
]);