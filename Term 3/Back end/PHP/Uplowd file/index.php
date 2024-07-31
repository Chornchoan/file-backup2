<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uplowd file in php</title>


</head>
<body>
    <?php
    if(isset($_POST['submit'])) {
        $fileName = $_FILES['file']['name'];
        $fileSize = $_FILES['file']['size'];
        $fileType = $_FILES['file']['type'];
        $tmp_name = $_FILES['file']['tmp_name'];

        $dir = "uploads /";

        if($fileType !="image/jpeg"){
            echo" only JPG image alloed.";
        
        }elseif ($fileSize > 200000) {
            echo "Your file is to large.";
        }else{
            move_uploaded_file($tmp_name, $dir.$fileName);
            echo "File has been uploded successfully!";
        }
       

    }
    ?>
    <form action="" method="POST" enctype="multipart/data">
        <input type="FILE" namae="file">
        <p>
        <input type="SUBMIT" name="submit">
    </form>

    
</body>
</html>

