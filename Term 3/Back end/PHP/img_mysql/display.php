<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "images";

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
// Retrieve image data from the database
$sql = "SELECT image FROM images ORDER BY id DESC LIMIT 1"; // Assuming you want to display the most recently inserted image
$stmt = $conn->prepare($sql);
$stmt->execute();
$row = $stmt->fetch();
if ($row) {
    $imageData = $row['image'];
    $imageSrc = 'data:image/jpeg;base64,' . base64_encode($imageData); // Convert binary data into base64 encoded string
    echo "<img src='$imageSrc' alt='Uploaded Image'>";
} else {
    echo "No image found.";
}

$conn = null;
