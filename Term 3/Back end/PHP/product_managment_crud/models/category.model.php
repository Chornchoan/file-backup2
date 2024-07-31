
<?php
    require("database/connection.php");

    function getCategories(){
        global $db;
        $categories = $db->prepare("SELECT * FROM categories");
        $categories->execute();
        return $categories->fetchAll();
    };
?>