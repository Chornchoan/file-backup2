
<?php 
// include of header
include_once 'includes/header.php';

//  include of pages 
$page = "home";
if (isset($_GET['page'])) {
    $page = $_GET['page'];
}
$pageLink = "pages/" . $page . ".php";
include_once $pageLink;

//  include of footer 
include_once 'includes/footer.php';


