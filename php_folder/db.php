<?php
// 1. MySQL Connection
$mysql_conn = new mysqli("localhost", "root", "", "guvi_project_db");
if ($mysql_conn->connect_error) { 
    die(json_encode(["status" => "error", "message" => "MySQL Connection Failed"])); 
}

// 2. Redis Connection (Now Working - Enabled in PHP)
try {
    $redis = new Redis();
    $redis->connect('127.0.0.1', 6379);
} catch (Exception $e) {
    // Redis server (redis-server.exe) run aagalana intha error varum
    die(json_encode(["status" => "error", "message" => "Redis Server Not Running"]));
}

// 3. MongoDB Connection (Now Working - Vendor folder created)
require __DIR__ . '/../vendor/autoload.php'; // Intha line ippo error tharaathu

try {
    $mongo_client = new MongoDB\Client("mongodb://localhost:27017");
    // Profiles details save panna intha variable profile.php-ku thevai
    $profile_db = $mongo_client->guvi_project_db->profiles;
} catch (Exception $e) {
    die(json_encode(["status" => "error", "message" => "MongoDB Connection Error"]));
}
?>