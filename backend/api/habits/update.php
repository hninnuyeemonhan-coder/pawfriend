<?php
// backend/api/habits/update.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$data = getRequestBody();

if (empty($data['habit_id'])) {
    jsonResponse(["error" => "habit_id is required"], 400);
}

$habitId = (int)$data['habit_id'];
$db = getDB();

$fields = [];
$values = [];

$allowedFields = ['title', 'description', 'frequency', 'time_of_day', 'scheduled_time', 'color', 'icon', 'is_active'];
foreach ($allowedFields as $field) {
    if (isset($data[$field])) {
        $fields[] = "$field = ?";
        $values[] = $data[$field];
    }
}

if (empty($fields)) {
    jsonResponse(["error" => "No fields to update"], 400);
}

$values[] = $habitId;
$values[] = $userId;

$sql = "UPDATE pf_habits SET " . implode(', ', $fields) . " WHERE id = ? AND user_id = ?";
$stmt = $db->prepare($sql);
$stmt->execute($values);

if ($stmt->rowCount() === 0) {
    jsonResponse(["error" => "Habit not found or no changes made"], 404);
}

jsonResponse(["message" => "Habit updated"]);