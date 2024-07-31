 <!-- HEADER -----------------------------------------  -->
 <?php
   require_once('templates/header.php');
   ?>

 <!-- MAIN -----------------------------------------  -->
 <form action="get.php" method="get">
    <label>Your name</label>
    <input type="text" name ="name"></input>

    <label>Your hobbies</label>
    <textarea name="comment" rows="5" cols="40"></textarea>

    <label>Your gender</label>
    <div>
       <label>
          <input type="radio" value="female" checked />Female
       </label>

       <label>
          <input type="radio" value="male" />Male
       </label>
    </div>

    <button type="submit">SEND</button>
 </form>


 <!-- FOOTER -----------------------------------------  -->
 <?php
   require_once('templates/footer.php');
   ?>
