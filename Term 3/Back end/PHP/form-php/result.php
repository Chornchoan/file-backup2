<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
<?php
if($_SERVER["REQUEST_METHOD"]=="POST") {
    if(isset($_POST["text-input"]) && isset($_POST["email-input"]) && isset($_POST["password-input"]) && isset($_POST["number-input"])&& isset($_POST["message"])) {
?>
<table class= "table table-bordered">
    <thead>
        <tr>
            <th>Text</th>
            <th>Email</th>
            <th>Password</th>
            <th>number</th>
            <th>Message</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><?= $_POST['text-input']; ?></td>
            <td><?= $_POST['email-input']; ?></td>
           <td><?= $_POST['password-input']; ?></td>
            <td><?= $_POST['number-input']; ?></td>
            <td><?= $_POST['message']; ?></td>
        </tr>
        </tbody>
</table>
<?php
}else {
    echo "Pleaces try again ";

}
}