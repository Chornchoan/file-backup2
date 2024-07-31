<?php
// $regex = "/^[a-zA-Z\s\d\.$#@%]+$/"; style (1)
// $regex = "/^[A-Z][a-z][\d]$/";  all letter start from big letter and one letter (2)
// $regex ="/^[a-z]{3,}+$/";
// $regex ="/^[a-z\d]{1,10}+$/";
// $regex ="/^[(][\d]{3}[)][\s][\d]{3}[\s][\d]{3}[\s][\d]{3}$/";
$regex ="/^[a-z\d]+@[a-z\d]+\.[a-z]{2,}+$/";
$message = "";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    if (preg_match($regex, $_POST['text'])) {
        $message = "😊";
    } else {
        $message = "😢";
    }
}
?>
<form method="post">
    <input type="text" name="text">
    <button>Submit</button>
    <?= $message != ""? $message :""?>
   
</form>
