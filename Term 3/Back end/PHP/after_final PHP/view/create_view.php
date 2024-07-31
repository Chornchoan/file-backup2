<?php require_once '../templates/header.php' ?>
<div class="container">
    <form action="../controllers/create_controllers.php" method = 'psot'>
        <div class="form-group">
            <input type="text" name="item_name" class="form-control" placeholder="Item name" >
        </div>
        <div class="form-group">
            <input type="number" name="item_price" class="form-control" placeholder="Item price" >
        </div>
        <div class="form-group">
            <button class="btn btn-primary btn-block" type="submit" >Add Items</button>
        </div>
    </form>
</div>
<?php require_once '../templates/footer.php' ?>