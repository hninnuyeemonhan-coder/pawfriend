<?php
// backend/api/habits/delete.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$data = getRequestBody();

if (empty($data['habit_id'])) {
    jsonResponse(["error" => "habit_id is required"], 400);
}

$habitId = (int)$data['habit_id'];
$db = getDB();

$stmt = $db->prepare("DELETE FROM pf_habits WHERE id = ? AND user_id = ?");
$stmt->execute([$habitId, $userId]);

if ($stmt->rowCount() === 0) {
    jsonResponse(["error" => "Habit not found"], 404);
}

jsonResponse(["message" => "Habit deleted"]);