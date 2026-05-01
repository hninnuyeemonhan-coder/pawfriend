<?php
// backend/api/mood/log.php — Save today's mood
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$data = getRequestBody();

if (empty($data['mood'])) {
    jsonResponse(["error" => "Mood is required"], 400);
}

$mood = $data['mood'];
$note = trim($data['note'] ?? '');
$today = date('Y-m-d');

$allowed = ['great', 'good', 'okay', 'bad', 'terrible'];
if (!in_array($mood, $allowed)) {
    jsonResponse(["error" => "Invalid mood value"], 400);
}

$db = getDB();

// Upsert — update if already logged today, insert if not
$stmt = $db->prepare("SELECT id FROM pf_mood_log WHERE user_id = ? AND log_date = ?");
$stmt->execute([$userId, $today]);
$existing = $stmt->fetch();

if ($existing) {
    $stmt = $db->prepare("UPDATE pf_mood_log SET mood = ?, note = ? WHERE id = ?");
    $stmt->execute([$mood, $note, $existing['id']]);
} else {
    $stmt = $db->prepare("INSERT INTO pf_mood_log (user_id, mood, note, log_date) VALUES (?, ?, ?, ?)");
    $stmt->execute([$userId, $mood, $note, $today]);
}

jsonResponse(["message" => "Mood logged"]);