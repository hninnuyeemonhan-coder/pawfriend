<?php
// backend/api/auth/session.php
require_once __DIR__ . '/../../config/database.php';

if (!isset($_SESSION['user_id'])) {
    jsonResponse(["authenticated" => false], 401);
}

$db = getDB();
$stmt = $db->prepare("SELECT id, name, username, email, pet_name, avatar_url, created_at FROM pf_users WHERE id = ?");
$stmt->execute([$_SESSION['user_id']]);
$user = $stmt->fetch();

if (!$user) {
    session_destroy();
    jsonResponse(["authenticated" => false], 401);
}

jsonResponse([
    "authenticated" => true,
    "user" => $user
]);