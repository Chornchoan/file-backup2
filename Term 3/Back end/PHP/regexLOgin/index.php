<?php
 $regex ="/^[a-z]{8,}+$/";
 $message = "";
 if ($_SERVER['REQUEST_METHOD'] == 'POST') {
     if (preg_match($regex, $_POST['text'])) {
         $message = "😊";
     } else {
         $message = "😢";
     }
     $regexs ="/^[\.$#%\s]+$/";
     $pass="";
     if (preg_match($regexs, $_POST['password'])) {
         $pass = "🥰";
     } else {
         $pass = "🤪";
     }
 }
 ?>
 <form method="post">
     <input type="text" name="text" placeholder="Your name">
     <input type="text" name="password" placeholder="Your password">
     <button>Submit</button>
     <?= $message != ""? $message :""?>
     <?= $pass != ""? $pass :""?>
     
    
 </form>