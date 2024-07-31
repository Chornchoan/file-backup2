<?php
    require("database/connection.php");
       
    function getProducts(){
        global $db;
        $products = $db->prepare(
            "SELECT products.pro_id, products.pro_name, categories.cate_name 
            FROM products LEFT JOIN categories 
            ON products.cate_id = categories.cate_id");
        // $products->execute();
        return $products->fetchAll();
    };
?>