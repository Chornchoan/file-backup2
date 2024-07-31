<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "images";

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

if(isset($_FILES['image'])){
    $image = file_get_contents($_FILES['image']['tmp_name']);
    $stmt = $conn->prepare("INSERT INTO images (image) VALUES (?)");
    $stmt->execute([$image]);
    header('location: display_image.php');
    exit; // Added to stop script execution after redirect
} else {
    echo "No image uploaded.";
}
?>
