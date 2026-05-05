<?php
// backend/config/database.example.php
// EXAMPLE configuration file - rename to database.php and fill in your own credentials

// CORS - Allow requests from localhost and your deployment URL
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$allowed = ['http://localhost:5173', 'https://your-deployment-url.example.com'];
if (in_array($origin, $allowed)) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: http://localhost:5173");
}

header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

// Handle preflight OPTIONS request IMMEDIATELY
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Configure session cookie for cross-origin
if (session_status() === PHP_SESSION_NONE) {
    session_set_cookie_params([
        'lifetime' => 86400,       // 24 hours
        'path' => '/',
        'domain' => '',
        'secure' => true,          // required for SameSite=None
        'httponly' => true,
        'samesite' => 'None'       // allows cross-origin cookies
    ]);
    session_start();
}

// ─── Database credentials ────────────────────────────────────────────────────
// Replace these with your own values, then rename this file to database.php
define('DB_HOST', 'localhost');                  // e.g., 'localhost' or your DB host
define('DB_NAME', 'YOUR_DATABASE_NAME_HERE');    // e.g., 'pawfriend'
define('DB_USER', 'YOUR_DATABASE_USER_HERE');    // your DB username
define('DB_PASS', 'YOUR_DATABASE_PASSWORD_HERE');// your DB password

function getDB() {
    try {
        $pdo = new PDO(
            "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
            DB_USER,
            DB_PASS,
            [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES => false
            ]
        );
        return $pdo;
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(["error" => "Database connection failed"]);
        exit();
    }
}

function jsonResponse($data, $code = 200) {
    http_response_code($code);
    echo json_encode($data);
    exit();
}

function getRequestBody() {
    return json_decode(file_get_contents("php://input"), true);
}

function requireAuth() {
    if (!isset($_SESSION['user_id'])) {
        jsonResponse(["error" => "Not authenticated"], 401);
    }
    return $_SESSION['user_id'];
}