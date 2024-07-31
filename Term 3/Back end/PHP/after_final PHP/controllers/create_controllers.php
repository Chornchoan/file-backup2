<?php 
require_once '../model/item.php';
if ($_SERVER['REQUEST_METHOD'] =='POST'){
    $item_name = $_POST['item_name'];
    $item_price = $_POST['item_price'];
    if (!empty($item_price) and !empty($item_name)){
        createItem($item_name, $item_price);
        header('location: ../index.php');
    }
}