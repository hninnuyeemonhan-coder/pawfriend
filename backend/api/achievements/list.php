<?php
// backend/api/achievements/list.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

// Get all achievements with earned status
$stmt = $db->prepare("
    SELECT 
        a.*,
        CASE WHEN ua.id IS NOT NULL THEN 1 ELSE 0 END AS earned,
        ua.earned_at
    FROM pf_achievements a
    LEFT JOIN pf_user_achievements ua ON ua.achievement_id = a.id AND ua.user_id = ?
    ORDER BY a.requirement_value ASC
");
$stmt->execute([$userId]);
$achievements = $stmt->fetchAll();

foreach ($achievements as &$a) {
    $a['id'] = (int)$a['id'];
    $a['requirement_value'] = (int)$a['requirement_value'];
    $a['xp_reward'] = (int)$a['xp_reward'];
    $a['earned'] = (bool)$a['earned'];
}

// Count earned
$earnedCount = count(array_filter($achievements, fn($a) => $a['earned']));

jsonResponse([
    "achievements" => $achievements,
    "earned_count" => $earnedCount,
    "total_count" => count($achievements)
]);