<?php
// backend/api/mood/history.php — Get mood history (last 30 days)
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

$stmt = $db->prepare("
    SELECT mood, note, log_date 
    FROM pf_mood_log 
    WHERE user_id = ? 
    ORDER BY log_date DESC 
    LIMIT 30
");
$stmt->execute([$userId]);
$moods = $stmt->fetchAll();

// Get today's mood
$today = date('Y-m-d');
$stmt = $db->prepare("SELECT mood, note FROM pf_mood_log WHERE user_id = ? AND log_date = ?");
$stmt->execute([$userId, $today]);
$todayMood = $stmt->fetch();

jsonResponse([
    "history" => $moods,
    "today" => $todayMood ?: null
]);