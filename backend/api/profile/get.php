<?php
// backend/api/profile/get.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

// User info
$stmt = $db->prepare("SELECT id, name, username, email, phone, avatar_url, pet_name, created_at FROM pf_users WHERE id = ?");
$stmt->execute([$userId]);
$user = $stmt->fetch();

// Stats
$stmt = $db->prepare("SELECT COUNT(*) as total_habits FROM pf_habits WHERE user_id = ? AND is_active = 1");
$stmt->execute([$userId]);
$totalHabits = (int)$stmt->fetch()['total_habits'];

$stmt = $db->prepare("SELECT COUNT(*) as total_completions FROM pf_habit_completions WHERE user_id = ?");
$stmt->execute([$userId]);
$totalCompletions = (int)$stmt->fetch()['total_completions'];

$stmt = $db->prepare("SELECT MAX(longest_streak) as best_streak FROM pf_streaks WHERE user_id = ?");
$stmt->execute([$userId]);
$bestStreak = (int)($stmt->fetch()['best_streak'] ?? 0);

// Habit list
$stmt = $db->prepare("SELECT id, title, color, icon, frequency FROM pf_habits WHERE user_id = ? AND is_active = 1 ORDER BY created_at DESC");
$stmt->execute([$userId]);
$habits = $stmt->fetchAll();

jsonResponse([
    "user" => $user,
    "stats" => [
        "total_habits" => $totalHabits,
        "total_completions" => $totalCompletions,
        "best_streak" => $bestStreak
    ],
    "habits" => $habits
]);