<?php
require_once "database.php";
if ($_SERVER['REQUEST_METHOD']=='POST'){
    if ($_POST['name']!=="" && $_POST['age']!==''){
        $name = $_POST['name'];
        $age = $_POST['age'];
        $id = $_POST['id'];

        $statement = $connection->prepare("UPDATE work_one SET name = :name, age = :age WHERE id = :id");
        $statement->execute([
            ':name'=> $name,
            ':age'=> $age, 
            ':id'=>$id]);
        header('Location: index.php');

    }
}