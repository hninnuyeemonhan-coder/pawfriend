<?php
// backend/api/accessories/list.php
require_once __DIR__ . '/../../config/database.php';

$userId = requireAuth();
$db = getDB();

// Get user stats to determine what's unlockable
$stmt = $db->prepare("SELECT level FROM pf_pet_status WHERE user_id = ?");
$stmt->execute([$userId]);
$petLevel = (int)($stmt->fetch()['level'] ?? 1);

$stmt = $db->prepare("SELECT MAX(current_streak) as best FROM pf_streaks WHERE user_id = ?");
$stmt->execute([$userId]);
$bestStreak = (int)($stmt->fetch()['best'] ?? 0);

$stmt = $db->prepare("SELECT COUNT(*) as total FROM pf_habit_completions WHERE user_id = ?");
$stmt->execute([$userId]);
$totalCompletions = (int)$stmt->fetch()['total'];

// Get all accessories with unlock and equipped status
$stmt = $db->prepare("
    SELECT 
        a.*,
        CASE WHEN ua.id IS NOT NULL THEN 1 ELSE 0 END AS unlocked,
        COALESCE(ua.is_equipped, 0) AS is_equipped
    FROM pf_accessories a
    LEFT JOIN pf_user_accessories ua ON ua.accessory_id = a.id AND ua.user_id = ?
    ORDER BY a.type, a.unlock_value ASC
");
$stmt->execute([$userId]);
$accessories = $stmt->fetchAll();

// Check if any new accessories should be unlocked
foreach ($accessories as &$acc) {
    $acc['id'] = (int)$acc['id'];
    $acc['unlock_value'] = (int)$acc['unlock_value'];
    $acc['unlocked'] = (bool)$acc['unlocked'];
    $acc['is_equipped'] = (bool)$acc['is_equipped'];

    // Auto-unlock if requirement met
    if (!$acc['unlocked']) {
        $met = false;
        switch ($acc['unlock_type']) {
            case 'level': $met = $petLevel >= $acc['unlock_value']; break;
            case 'streak': $met = $bestStreak >= $acc['unlock_value']; break;
            case 'completions': $met = $totalCompletions >= $acc['unlock_value']; break;
            case 'achievement':
                $stmt2 = $db->prepare("SELECT id FROM pf_user_achievements WHERE user_id = ? AND achievement_id = ?");
                $stmt2->execute([$userId, $acc['unlock_value']]);
                $met = (bool)$stmt2->fetch();
                break;
        }
        if ($met) {
            $stmt2 = $db->prepare("INSERT IGNORE INTO pf_user_accessories (user_id, accessory_id) VALUES (?, ?)");
            $stmt2->execute([$userId, $acc['id']]);
            $acc['unlocked'] = true;
        }
    }
}

jsonResponse(["accessories" => $accessories]);