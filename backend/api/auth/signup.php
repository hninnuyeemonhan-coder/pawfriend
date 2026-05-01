<?php
// backend/api/auth/signup.php
require_once __DIR__ . '/../../config/database.php';

$data = getRequestBody();

if (empty($data['name']) || empty($data['username']) || empty($data['email']) || empty($data['password'])) {
    jsonResponse(["error" => "All fields are required"], 400);
}

$name     = trim($data['name']);
$username = trim($data['username']);
$email    = trim($data['email']);
$password = $data['password'];
$petName  = trim($data['pet_name'] ?? 'Buddy');

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    jsonResponse(["error" => "Invalid email format"], 400);
}

// Strong password: 8+ chars, uppercase, lowercase, number, special char
if (strlen($password) < 8 ||
    !preg_match('/[A-Z]/', $password) ||
    !preg_match('/[a-z]/', $password) ||
    !preg_match('/[0-9]/', $password) ||
    !preg_match('/[^A-Za-z0-9]/', $password)) {
    jsonResponse([
        "error" => "Password must be at least 8 characters with uppercase, lowercase, number, and special character"
    ], 400);
}

if (!preg_match('/^[a-zA-Z0-9_]{3,30}$/', $username)) {
    jsonResponse(["error" => "Username must be 3-30 characters (letters, numbers, underscores)"], 400);
}

$db = getDB();

$stmt = $db->prepare("SELECT id FROM pf_users WHERE email = ? OR username = ?");
$stmt->execute([$email, $username]);
if ($stmt->fetch()) {
    jsonResponse(["error" => "Email or username already taken"], 409);
}

$hash = password_hash($password, PASSWORD_BCRYPT);

try {
    $db->beginTransaction();

    $stmt = $db->prepare("INSERT INTO pf_users (name, username, email, password_hash, pet_name) VALUES (?, ?, ?, ?, ?)");
    $stmt->execute([$name, $username, $email, $hash, $petName]);
    $userId = $db->lastInsertId();

    $stmt = $db->prepare("INSERT INTO pf_pet_status (user_id, xp, level, stage) VALUES (?, 0, 1, 'puppy')");
    $stmt->execute([$userId]);

    $db->commit();

    $_SESSION['user_id'] = $userId;

    jsonResponse([
        "message" => "Account created successfully",
        "user" => [
            "id" => (int)$userId,
            "name" => $name,
            "username" => $username,
            "email" => $email,
            "pet_name" => $petName
        ]
    ], 201);

} catch (Exception $e) {
    $db->rollBack();
    jsonResponse(["error" => "Registration failed"], 500);
}