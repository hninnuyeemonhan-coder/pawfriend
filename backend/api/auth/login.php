<?php
// backend/api/auth/login.php
require_once __DIR__ . '/../../config/database.php';

$data = getRequestBody();

if (empty($data['email']) || empty($data['password'])) {
    jsonResponse(["error" => "Email and password are required"], 400);
}

$email    = trim($data['email']);
$password = $data['password'];

$db = getDB();

$stmt = $db->prepare("SELECT id, name, username, email, password_hash, pet_name, avatar_url FROM pf_users WHERE email = ?");
$stmt->execute([$email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    jsonResponse(["error" => "Invalid email or password"], 401);
}

$_SESSION['user_id'] = $user['id'];

jsonResponse([
    "message" => "Login successful",
    "user" => [
        "id" => (int)$user['id'],
        "name" => $user['name'],
        "username" => $user['username'],
        "email" => $user['email'],
        "pet_name" => $user['pet_name'],
        "avatar_url" => $user['avatar_url']
    ]
]);