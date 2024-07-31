
<?php 

require("models/category.model.php");
$categories = getCategories();
require("views/categoryView/category.view.php");
?>