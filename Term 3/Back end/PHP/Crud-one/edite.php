<?php
$id = $_GET['id'];
$name = $_POST['name'];
$age = $_POST['age'];
$email = $_POST['email'];

echo "$name  $age  $email" ;

$db = new PDO("mysql:host=localhost; dbname=school_db", "root", "");

$query = "UPDATE students  SET name = :name, age = :age, email = :email WHERE id = $id;";
$statement = $db->prepare($query);
$statement->execute(["name" => $name, "age" => $age, "email" => $email]);

header("location: index.php");