<?php
// backend/api/profile/upload_avatar.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();

if (!isset($_FILES['avatar'])) {
    jsonResponse(["error" => "No file uploaded"], 400);
}

$file = $_FILES['avatar'];

// Check for PHP upload errors first (common issue: file too big for PHP's ini setting)
if ($file['error'] !== UPLOAD_ERR_OK) {
    $errorMessages = [
        UPLOAD_ERR_INI_SIZE   => "File exceeds server upload size limit",
        UPLOAD_ERR_FORM_SIZE  => "File is too large",
        UPLOAD_ERR_PARTIAL    => "File was only partially uploaded",
        UPLOAD_ERR_NO_FILE    => "No file was uploaded",
        UPLOAD_ERR_NO_TMP_DIR => "Server missing temp folder",
        UPLOAD_ERR_CANT_WRITE => "Failed to write file to disk",
        UPLOAD_ERR_EXTENSION  => "A PHP extension stopped the upload",
    ];
    $msg = $errorMessages[$file['error']] ?? "Unknown upload error";
    jsonResponse(["error" => $msg], 400);
}

$allowed = ['image/jpeg', 'image/png', 'image/webp'];

if (!in_array($file['type'], $allowed)) {
    jsonResponse(["error" => "Only JPG, PNG, and WebP allowed"], 400);
}

if ($file['size'] > 2 * 1024 * 1024) {
    jsonResponse(["error" => "File too large (max 2MB)"], 400);
}

$ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$filename = "user_{$userId}_" . time() . "." . $ext;
$uploadDir = __DIR__ . '/../../uploads/avatars/';

if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        jsonResponse(["error" => "Could not create upload folder"], 500);
    }
}

$path = $uploadDir . $filename;

if (move_uploaded_file($file['tmp_name'], $path)) {
    // Store relative path in DB (safer — survives domain changes)
    $avatarUrl = "/uploads/avatars/" . $filename;

    // Build absolute URL for the response so frontend can use it directly
    $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
    $host = $_SERVER['HTTP_HOST'];
    // Path to /backend/ — adjust if your folder structure differs
    $basePath = '/pawfriend/backend';
    $absoluteUrl = "{$scheme}://{$host}{$basePath}{$avatarUrl}";

    $db = getDB();
    $stmt = $db->prepare("UPDATE pf_users SET avatar_url = ? WHERE id = ?");
    $stmt->execute([$avatarUrl, $userId]);

    jsonResponse([
        "message" => "Avatar uploaded",
        "avatar_url" => $avatarUrl,           // relative (for DB)
        "avatar_url_full" => $absoluteUrl     // absolute (for frontend convenience)
    ]);
} else {
    jsonResponse(["error" => "Upload failed — check folder permissions"], 500);
}
