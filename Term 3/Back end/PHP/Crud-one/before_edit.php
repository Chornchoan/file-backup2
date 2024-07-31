<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <?php $id = $_GET["id"] ?>
        <form action="./edite.php?id=<?= $id ?>" method="post">
            <div class="container mt-3 d-grid gap-3">
                <input type="text" name="name" class="form-control" placeholder="name">
                <input type="number" name="age" class="form-control" placeholder="age">
                <input type="email" name="email" class="form-control" placeholder="email">
                <button class="btn btn-primary">Submit</button>
            </div>
        </form>
    </div>
</body>
</html>