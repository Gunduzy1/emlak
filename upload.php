<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

$uploadDir = __DIR__ . '/uploads/';
if (!is_dir($uploadDir)) {
    mkdir($uploadDir, 0755, true);
}

$urls = [];
$allowed = ['jpg','jpeg','png','gif','webp'];

if (!empty($_FILES['images'])) {
    foreach ($_FILES['images']['tmp_name'] as $key => $tmp_name) {
        $name = basename($_FILES['images']['name'][$key]);
        $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
        if (!in_array($ext, $allowed)) continue; 

        $newName = uniqid() . '.' . $ext;
        $target = $uploadDir . $newName;

        if (move_uploaded_file($tmp_name, $target)) {
            $base = rtrim(dirname($_SERVER['SCRIPT_NAME']), '/\\');
            $urls[] = (isset($_SERVER['HTTPS']) ? "https" : "http") . "://" . $_SERVER['HTTP_HOST']
                . $base . "/uploads/" . $newName;
        }
    }
}

echo json_encode(['urls' => $urls]);
?>