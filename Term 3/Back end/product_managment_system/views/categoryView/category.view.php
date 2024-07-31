<?php require("views/templates/header.php");?>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card p-3 mt-2">
                    <div class="container">
                        <div class="row">
                            <div class="col-9">
                                <h2>This is categories page</h2>
                            </div>
                            <div class="col-3">
                                <a href="#" class="btn btn-primary">Add new category</a>
                            </div>
                        </div>
                    </div>
                    <table class="table table-collapse">
                        <thead>
                            <th>#</th>
                            <th>Category name</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <?php foreach ($categories as $cate):?>
                            <tr>
                                <td><?= $cate["cate_id"]?></td>
                                <td><?= $cate["cate_name"]?></td>
                                <td>
                                    <a href="#" class="btn btn-outline-primary">Edit</a>
                                    <a href="#" class="btn btn-outline-danger">Delete</a>
                                </td>
                            </tr>
                            <?php endforeach?>
                        </tbody>
                    </table>
                </div>
            </div>
            
        </div>
    </div>
<?php require("views/templates/footer.php");