<?php 
require("models/product.model.php");
$products = getProducts();
require("view/productView/product.view.php");
?>