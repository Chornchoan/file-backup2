<?php
//connection to database 
$db = new PDO('mysql:hosst=localhost;dbname=crud_item', 'root' ,'');


function getItems() 
{
    global $db;
    $statement = $db->prepare('SELECT * FROM item_1 ORDER BY id');
    $statement->execute();
    return $statement->fetchAll();

}

function getByid($id) {
    global $db;
    $statement = $db->prepare('SELECT * FROM item_1 WHERE id = :id');
    $statement->execute([':id' => $id,]);
    return $statement->fetch();
}

function deleteItem ($id) {
    global $db ;
    $statement = $db->prepare('DELETE FROM item_1 WHERE id = :id');
    $statement->execute([':id' => $db]);
    // return true if data has been delete successfully otherwise false

    return $statement->rowCount() > 0;

}

function updateItem ($id, $name, $price){
    global $db;
    $statement = $db->prepare('UPDATE item_1 SET name = :name, price = price WHERE id = :id');
    $statement->execute([':name'=> $name, ':price' => $price, ':id' => $id]);
    // return true if data has been updated successfully otherwise false
    return $statement->rowCount() > 0 ;
}

function createItem ($name, $price) {
    global $db;
    $statement = $db->prepare   ('INSERT INTO item_1 (name, price) VALUES (:name, :price)');
    $statement->execute([':name' => $name, ':price' => $price]);
    // return true if data has been create successfully otherwise false
    return $statement->rowCount() > 0;
}

