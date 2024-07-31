<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<?php
$db = new PDO("mysql:host=localhost;dbname=school_db", "root", "");

$query = "SELECT * FROM students";
$statement = $db->prepare($query); // get data from $query to store in $statement 
$statement->execute(); //  get data from $statement to execute
$data = $statement->fetchAll();
// print_r($data);
?>

<div class="container">
    <table class="table table-bordered">
        <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Action</td>
            <td>Add</td>
        </tr>
        <?php foreach($data as $row):?>
            <tr>
                <td><?= $row['id'] ?></td>
                <td><?= $row['name'] ?></td>
                <td><?= $row['age'] ?></td>
                <td><?= $row['email'] ?></td>
                <td>
                    <a href="delete.php?id=<?= $row['id'] ?>" class="btn btn-danger btn-sm">Delete</a>
                    <a href="./before_edit.php?id=<?= $row['id'] ?>" class="btn btn-info btn-sm">Edite</a>
                </td>
            </tr>
         <?php endforeach;?>   
    </table>
</div> 

