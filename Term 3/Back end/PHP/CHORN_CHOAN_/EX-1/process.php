<?php
require_once 'templates/header.php';
?>
<!-- TODO WRITE CODE PHP AFTER SUBMIT FORM -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['username'] !== "" || $_POST['birth_day'] !== "" || $_POST['email'] !== "" || $_POST['password'] !== "" || $_POST['gender'] !== "" || $_POST['province'] !== "" || $_POST['subjects'] !== "" || $_POST['comment'] !== "") {
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $gender = $_POST['gender'];
        $province = $_POST['province'];
        $subjects = $_POST['subjects'];
        $comment = $_POST['comment'];

        $res = "";
        foreach ($subjects as $subject) {
            $res .= $subject . " ";
        }

        $birth = $_POST['birth_day'];
        $birth=new DateTime($birth);
        $birth=$birth->format("l,F j, Y");
    }



}
?>
<div class="container mt-3">
    <div class="card">
        <div class="card-header text-center">
            <p>RESULT</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <p>Username is:
                        <?php echo $username ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your birth day is:
                        <?php echo $birth 
                        ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your email address is:
                        <?php echo $email
                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your password is:
                        <?php echo $password
                        ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your gender is:
                        <?php echo $gender
                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your province is:
                        <?php echo $province
                        ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your subjects are:
                        <?php echo $res
                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your comment is:
                        <?php echo $comment
                        ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


<?php
require_once 'templates/header.php';
?>