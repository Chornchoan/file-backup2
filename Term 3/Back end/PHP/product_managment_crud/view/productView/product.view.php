<?php 
require("view/templates/header.php");
?>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card p-3 mt-2">
                    <h2>This is products page</h2>
                    <table class="table table-collapse">
                        <thead>
                            <th>ID</th>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <?php foreach( $products as $product):?>
                            <tr>
                                <td><?= $product["pro_id"]?></td>
                                <td><?= $product["pro_name"]?></td>
                                <td><?= $product["cate_name"]?></td>
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
<?php require("view/templates/footer.php");