<?php require_once "partials/header.php"?>;
<div class="container mt-5">
    <div class="d-flex justify-content-end align-items-center">
        <a href="create_form.php" class="btn btn-primary btn-sm">Add New +</a>
    </div>
    <table class="table table-striped">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
            <?php
                require_once ('./database.php');
                $statemene
            ?>
            <?php foreach ($works as $work):?>
            <tr>
                <td><?=$work['id']?></td>
                <td><?=$work['name']?></td>
                <td><?=$work['age']?></td>
                <td>
                    <a href="edite_form.php?id=<?= $work['id']?>"class="btn btn-primary btn-sm">Edite</a>
                    <a href="delete_action.php?id=<?= $work['id']?>"class="btn btn-danger btn-sm">Delete</a>
                </td>
            </tr>
            <?php endforeach?>
        </tbody>

    </table>
</div>
<?php require_once "partials/footer.php"?>
 


