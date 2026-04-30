<?php
// backend/api/habits/create.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$data = getRequestBody();

if (empty($data['title'])) {
    jsonResponse(["error" => "Habit title is required"], 400);
}

$title         = trim($data['title']);
$description   = trim($data['description'] ?? '');
$frequency     = in_array($data['frequency'] ?? '', ['daily', 'weekly']) ? $data['frequency'] : 'daily';
$timeOfDay     = in_array($data['time_of_day'] ?? '', ['morning', 'afternoon', 'evening', 'anytime']) ? $data['time_of_day'] : 'anytime';
$scheduledTime = !empty($data['scheduled_time']) ? $data['scheduled_time'] : null;
$color         = $data['color'] ?? '#6C63FF';
$icon          = $data['icon'] ?? 'star';

$db = getDB();

try {
    $db->beginTransaction();

    $stmt = $db->prepare("
        INSERT INTO pf_habits (user_id, title, description, frequency, time_of_day, scheduled_time, color, icon)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");
    $stmt->execute([$userId, $title, $description, $frequency, $timeOfDay, $scheduledTime, $color, $icon]);
    $habitId = $db->lastInsertId();

    $stmt = $db->prepare("INSERT INTO pf_streaks (habit_id, user_id, current_streak, longest_streak) VALUES (?, ?, 0, 0)");
    $stmt->execute([$habitId, $userId]);

    $db->commit();

    jsonResponse([
        "message" => "Habit created",
        "habit" => [
            "id" => (int)$habitId,
            "title" => $title,
            "frequency" => $frequency,
            "time_of_day" => $timeOfDay,
            "color" => $color,
            "icon" => $icon
        ]
    ], 201);

} catch (Exception $e) {
    $db->rollBack();
    jsonResponse(["error" => "Failed to create habit"], 500);
}