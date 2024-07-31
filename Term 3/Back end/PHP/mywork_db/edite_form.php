<?php require_once 'partials/header.php';?>
<div class="container mt-5">
   <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
        <?php 
        require_once "database.php";
        if (isset($_GET['id'])){
            $id = $_GET['id'];
            $statement = $connection ->prepare("SELECT *FROM work_one WHERE id = :id");
            $statement->execute([':id' => $id ]);
            $work = $statement->fetch();
        }
        ?>
        <div class="card bg-light">
            <div class="card-body">
                <form action="update_action.php" method="POST">
                    <input type="hidden" name="id" value="<?= $work['id']?>">
                    <div class="mb-3">
                        <input type="text"  name="name"  class="form-control" placeholder="Name" value="<?= $work['name']?>">
                    </div>
                    <div class="mb-3">
                        <input type="number" name="age"  class="form-control" placeholder="Age" value="<?= $work['age']?>">
                    </div>
                    <div class="mb-3 d-grid gap-2">
                        <button class="btn btn-warning btn-block">Update Now</button>
                    </div>
                </form>
        </div>
    </div>
    <div class="col-3"></div>
   </div>
</div>
<?php require_once 'partials/footer.php';?>