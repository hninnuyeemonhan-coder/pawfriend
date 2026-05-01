<?php
// backend/api/pet/status.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();
$today = date('Y-m-d');

// Get pet base info
$stmt = $db->prepare("
    SELECT ps.xp, ps.level, ps.stage, u.pet_name
    FROM pf_pet_status ps
    JOIN pf_users u ON u.id = ps.user_id
    WHERE ps.user_id = ?
");
$stmt->execute([$userId]);
$pet = $stmt->fetch();

if (!$pet) {
    jsonResponse(["error" => "Pet not found"], 404);
}

/*
 * Count total habits AND how many are "done in their current period":
 *   - daily  habit  →  completed today
 *   - weekly habit  →  completed within the last 7 days
 *
 * This matches the logic used in habits/list.php so the emotion is consistent
 * with what the user sees on their habit list.
 */
$stmt = $db->prepare("
    SELECT
        COUNT(*) AS total,
        SUM(
            CASE
                WHEN h.frequency = 'weekly' THEN (
                    SELECT CASE
                        WHEN MAX(hc.completed_date) IS NULL THEN 0
                        WHEN DATEDIFF(?, MAX(hc.completed_date)) < 7 THEN 1
                        ELSE 0
                    END
                    FROM pf_habit_completions hc
                    WHERE hc.habit_id = h.id
                )
                ELSE (
                    SELECT CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
                    FROM pf_habit_completions hc
                    WHERE hc.habit_id = h.id AND hc.completed_date = ?
                )
            END
        ) AS done_in_period
    FROM pf_habits h
    WHERE h.user_id = ? AND h.is_active = 1
");
$stmt->execute([$today, $today, $userId]);
$row = $stmt->fetch();

$totalHabits   = (int)($row['total'] ?? 0);
$completedNow  = (int)($row['done_in_period'] ?? 0);

// Determine emotion based on actual completion (across all frequencies)
$emotion = 'normal';
if ($totalHabits > 0) {
    if ($completedNow >= $totalHabits) {
        $emotion = 'happy';
    } elseif ($completedNow === 0 && (int)date('H') >= 14) {
        // Sad only if it's afternoon/later AND nothing has been done at all
        $emotion = 'sad';
    }
}

// XP needed for next level
$xpForNextLevel = $pet['level'] * 50;
$xpProgress = $pet['xp'] - (($pet['level'] - 1) * 50);

jsonResponse([
    "pet" => [
        "name" => $pet['pet_name'],
        "xp" => (int)$pet['xp'],
        "level" => (int)$pet['level'],
        "stage" => $pet['stage'],
        "emotion" => $emotion,
        "xp_progress" => $xpProgress,
        "xp_needed" => $xpForNextLevel,
        "habits_total" => $totalHabits,
        "habits_completed" => $completedNow
    ]
]);
