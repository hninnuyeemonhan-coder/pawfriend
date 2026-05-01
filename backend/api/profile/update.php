<?php
// backend/api/profile/update.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$data = getRequestBody();

$db = getDB();
$fields = [];
$values = [];

$allowed = ['name', 'username', 'phone', 'pet_name'];
foreach ($allowed as $field) {
    if (isset($data[$field])) {
        $fields[] = "$field = ?";
        $values[] = trim($data[$field]);
    }
}

if (empty($fields)) {
    jsonResponse(["error" => "No fields to update"], 400);
}

$values[] = $userId;
$sql = "UPDATE pf_users SET " . implode(', ', $fields) . " WHERE id = ?";

try {
    $stmt = $db->prepare($sql);
    $stmt->execute($values);
    jsonResponse(["message" => "Profile updated"]);
} catch (PDOException $e) {
    if ($e->getCode() == 23000) {
        jsonResponse(["error" => "Username already taken"], 409);
    }
    jsonResponse(["error" => "Update failed"], 500);
}