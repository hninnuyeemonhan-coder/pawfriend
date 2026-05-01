<?php
// backend/api/habits/list.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

$today = date('Y-m-d');

/*
 * For each habit we figure out if it's been completed IN ITS CURRENT PERIOD:
 *   - daily  habit  →  the current period is TODAY
 *   - weekly habit  →  the current period is the last 7 days (rolling window)
 *
 * We also return the `last_completed_date` so the frontend knows when the
 * habit was last done (useful for weekly habits — "Done — next due Tue").
 */
$stmt = $db->prepare("
    SELECT
        h.id, h.title, h.description, h.frequency, h.time_of_day,
        h.scheduled_time, h.color, h.icon, h.created_at,
        s.current_streak, s.longest_streak,
        (
            SELECT MAX(completed_date)
            FROM pf_habit_completions
            WHERE habit_id = h.id
        ) AS last_completed_date,
        CASE
            WHEN h.frequency = 'weekly' THEN (
                -- Weekly: done if ANY completion exists in the last 7 days (inclusive)
                SELECT CASE
                    WHEN MAX(completed_date) IS NULL THEN 0
                    WHEN DATEDIFF(?, MAX(completed_date)) < 7 THEN 1
                    ELSE 0
                END
                FROM pf_habit_completions
                WHERE habit_id = h.id
            )
            ELSE (
                -- Daily (default): done only if completed today
                SELECT CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
                FROM pf_habit_completions
                WHERE habit_id = h.id AND completed_date = ?
            )
        END AS completed_current_period
    FROM pf_habits h
    LEFT JOIN pf_streaks s ON s.habit_id = h.id AND s.user_id = h.user_id
    WHERE h.user_id = ? AND h.is_active = 1
    ORDER BY h.time_of_day ASC, h.created_at DESC
");
$stmt->execute([$today, $today, $userId]);
$habits = $stmt->fetchAll();

foreach ($habits as &$h) {
    $h['id']              = (int)$h['id'];
    $h['current_streak']  = (int)($h['current_streak'] ?? 0);
    $h['longest_streak']  = (int)($h['longest_streak'] ?? 0);
    $h['completed_today'] = (bool)$h['completed_current_period']; // keep old name for frontend compat
    unset($h['completed_current_period']);

    // Calculate when the next completion is due (useful for weekly habits)
    if ($h['frequency'] === 'weekly' && !empty($h['last_completed_date'])) {
        // Next due = 7 days after last completion
        $h['next_due_date'] = date('Y-m-d', strtotime($h['last_completed_date'] . ' +7 days'));
        $h['days_until_due'] = max(0, (int)((strtotime($h['next_due_date']) - strtotime($today)) / 86400));
    } else {
        $h['next_due_date']  = null;
        $h['days_until_due'] = 0;
    }
}

jsonResponse(["habits" => $habits]);
