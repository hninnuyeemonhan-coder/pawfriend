<?php
// backend/api/accessories/equip.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$data = getRequestBody();

if (empty($data['accessory_id'])) {
    jsonResponse(["error" => "accessory_id is required"], 400);
}

$accessoryId = (int)$data['accessory_id'];
$equip = $data['equip'] ?? true; // true to equip, false to unequip
$db = getDB();

// Check user owns this accessory
$stmt = $db->prepare("SELECT id, is_equipped FROM pf_user_accessories WHERE user_id = ? AND accessory_id = ?");
$stmt->execute([$userId, $accessoryId]);
$owned = $stmt->fetch();

if (!$owned) {
    jsonResponse(["error" => "Accessory not unlocked"], 403);
}

// Get the accessory type
$stmt = $db->prepare("SELECT type FROM pf_accessories WHERE id = ?");
$stmt->execute([$accessoryId]);
$accessory = $stmt->fetch();

if ($equip) {
    // Unequip any other accessory of the same type first
    $stmt = $db->prepare("
        UPDATE pf_user_accessories ua
        JOIN pf_accessories a ON a.id = ua.accessory_id
        SET ua.is_equipped = 0
        WHERE ua.user_id = ? AND a.type = ?
    ");
    $stmt->execute([$userId, $accessory['type']]);

    // Equip this one
    $stmt = $db->prepare("UPDATE pf_user_accessories SET is_equipped = 1 WHERE user_id = ? AND accessory_id = ?");
    $stmt->execute([$userId, $accessoryId]);
} else {
    // Unequip
    $stmt = $db->prepare("UPDATE pf_user_accessories SET is_equipped = 0 WHERE user_id = ? AND accessory_id = ?");
    $stmt->execute([$userId, $accessoryId]);
}

jsonResponse(["message" => $equip ? "Accessory equipped" : "Accessory removed"]);