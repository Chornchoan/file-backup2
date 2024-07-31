<?php
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    '/' => "controllers/homeControllers/home.controller.php",
    '/products' => "controllers/productControllers/product.controller.php",
    '/categories' => "controllers/categoryControllers/category.controller.php"
];

if(array_key_exists($uri, $routes)){
    require $routes[$uri];
}else{
    require("view/error/404.view.php");
}
?>

