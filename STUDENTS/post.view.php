<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST' && !empty($_POST['username']) && !empty($_POST['password'])) :
    $username = $_POST['username'];
    $password = $_POST['password'];
    // security
    // One style///////
    // $statment=$db->prepare("SELECT username, credit_card_number FROM userdata WHERE username=:username and password=:pass");
    // $statment->execute(
    //     [':username'=>$username,
    //     ':pass'=>$password,
    //     ]
    // );
    // Another Style//////
    $query=("SELECT username, credit_card_number FROM userdata WHERE username=:username and password=:pass");
    $statment=$db->prepare($query);
    $statment->execute( [
        ':username'=>$username,
        ':pass'=>$password,
    ]);
    $list_of_users=$statment->fetchAll();

    if (count($list_of_users) == 0) :
?>
        <div class="text-danger">Wrong username or password !</div>
        <?php
    else :

        foreach ($list_of_users as $user) :
        ?>
            <div class="card m-3">
                <div class="card-header">
                    <span><?php echo $user['username'] ?></span>
                </div>
                <div class="card-body">
                    <p class="card-text">Your credit card number: <?php echo $user['credit_card_number']; ?></p>
                </div>
            </div>
            <hr>
<?php
        endforeach;
    endif;
endif;
?>
        