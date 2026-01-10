<?php
include 'db.php';
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'GET') {
    $email = $_GET['email'] ?? '';
    // Fetch from MongoDB
    $userProfile = $profile_db->findOne(['email' => $email]);
    
    // If no profile exists yet, return empty object instead of null
    echo json_encode($userProfile ? $userProfile : new stdClass());

} elseif ($method == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    if (!empty($data['email'])) {
        $profile_db->updateOne(
            ['email' => $data['email']],
            ['$set' => [
                'age' => $data['age'],
                'dob' => $data['dob'],
                'contact' => $data['contact']
            ]],
            ['upsert' => true] // Creates record if it doesn't exist
        );
        echo json_encode(['status' => 'success']);
    }
}
?>