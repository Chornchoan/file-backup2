<?php
require_once "database.php";
if ($_SERVER['REQUEST_METHOD']=='POST'){
    if ($_POST['name'] != "" && $_POST['age'] != ""){
        $name = $_POST['name'];
        $age = $_POST['age'];
        // echo $age;
        $statement = $connection->prepare("INSERT INTO work_one (name, age) VALUES(:name, :age)");
        $statement->execute([
            ':name' => $name,
            ':age' => $age,
        ]);
        header('Location: index.php');

    }
}
