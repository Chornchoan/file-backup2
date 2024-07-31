<?php
require_once('function.php');

if(isset($_POST['submit'])){
    $type = $_POST['type'];
    $uniqueid = $_POST['uniqueid'];


    postNotification($type, $uniqueid);

    echo "Notification has been posed";
}
?>
<!DOCTYPE html>
<html lang="en">
<>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>postNotificztion</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</head>
<body>
    <div class="container p-3">
        <form  method="post" action="">
            <div class="mb-3">
                <label for="type" class="form-label">Type of notification: </label>
                <input type="text"class="form-cotrol" id="type" name=type>
            </div>
            <div class="mb-3">
                <label for="uniqueid" class="form-label">uniqueid: </label>
                <input type="uniqueid"class="form-cotrol" id="uniqueid" name=uniqueid>
            </div>
            <button type="submit" name="submit" class="btn btn-primary">submit</button>
        </form>
    </div>
</body>
</html>