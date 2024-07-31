<?php
require_once('templates/header.php');

echo "<ul>";

// TODO
// - Your name is XXXXX
echo $_GET['name'];
// - Your hobbies areXXXXX
echo $_GET['comment'];
// - You are a boy/girl
echo $_GET['radio'];


echo "</ul>";


require_once('templates/footer.php');
