<?php
// backend/api/pet/info.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

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

jsonResponse(["pet" => $pet]);