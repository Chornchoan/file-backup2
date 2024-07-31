<?php
function createAccount(string $name, string $email, string $password) : bool{
    global $connection;
    $statement = $connection->prepare("INSERT INTO user(name, email, password,role) 
    VALUES (:name,:email, :password, :role)");
    $statement->execute([
        ':name'=>$name,
        ':email'=>$email,
        ':password'=>$password,
        ':role' =>'user'
    ]);
    return ($statement->rowCount() > 0);
}