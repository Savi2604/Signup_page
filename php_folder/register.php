<?php
// Database connection details
include 'db.php';

// Extra spaces or warnings-ai clear panna
ob_clean(); 
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

if (empty($email) || empty($password)) {
    echo json_encode(['status' => 'error', 'message' => 'Email and Password are required!']);
    exit;
}

try {
    $stmt = $mysql_conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);
    
    if ($stmt->execute()) {
        echo json_encode(['status' => 'success', 'message' => 'Registration Successful!']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'User already exists!']);
    }
    $stmt->close();
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => 'Database Error: ' . $e->getMessage()]);
}

$mysql_conn->close();
?>