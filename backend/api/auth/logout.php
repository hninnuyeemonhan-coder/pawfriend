<?php
// backend/api/auth/logout.php
require_once __DIR__ . '/../../config/database.php';

session_destroy();
jsonResponse(["message" => "Logged out successfully"]);