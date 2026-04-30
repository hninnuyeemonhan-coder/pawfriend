<?php
// backend/api/categories/list.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

// Get default categories + user's custom categories
$stmt = $db->prepare("
    SELECT * FROM pf_categories 
    WHERE is_default = 1 OR user_id = ?
    ORDER BY is_default DESC, name ASC
");
$stmt->execute([$userId]);
$categories = $stmt->fetchAll();

foreach ($categories as &$c) {
    $c['id'] = (int)$c['id'];
    $c['is_default'] = (bool)$c['is_default'];
}

jsonResponse(["categories" => $categories]);