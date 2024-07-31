<!-- WRIRE CODE PHP Submit FORM WITH VALIDATION -->
<?php
function secureData($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    return $data;
}

$value = [
    'username' => '',
    'password' => '',
];
$error = [
    'username' => '',
    'password' => '',
];
$is_form = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $value['username'] = isset($_POST['username']) ? $_POST['username'] : "";
    $value['password'] = isset($_POST['password']) ? $_POST['password'] : "";

    if (empty($_POST['username'] && empty($_POST['password']))) {
        $is_form = true;
    }

    if (!preg_match('/^[a-zA-Z0-9\s]+$/', secureData($_POST['username']))) {
        $is_form=false;
        $error['username'] = "Please Enter the user Name";
    }

    if (!preg_match('/^[a-zA-Z0-9!@#$%]{5,}$/', secureData($_POST['password']))) {
        $is_form=false;
        $error['password'] = "Please Enter the password";
    }
}
?>
<div class="container">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h1>Form</h1>
                </div>
                <div class="card-body">
                    <form action="#" method="post">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" value="" id="username" name="username" value="">
                            <small class="form-text text-danger">
                                 
                                 <?php echo $error['username'] //TODO:Display message error username?>
                            
                            </small>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">password</label>
                            <input type="text" class="form-control" value="" id="password" name="password" value="">
                            <small class="form-text text-danger">
                                 
                                <?php echo $error['password'] //TODO:Display message error password ?>
                              
                            </small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>
<br>
<?php
if ($is_form):
    ?>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <p>
                            username:
                            <?= $values['username'] ?>
                        </p>
                        <p>
                            password:
                            <?= $values['password'] ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
    <?php
endif;
?>