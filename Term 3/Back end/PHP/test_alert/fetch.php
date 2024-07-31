<?php
require_once ("db.php");
$db = new Connect;
$data = [];
global $tbl_Notifications;
if (isset($_POST['key']) && ($_POST['key'] == '123')) {

  $notifications = $db->prepare("SELECT * FROM $tbl_Notifications other by id desc  limit 10;");
  $notifications->execute();
  $n_notification = $notifications->rowCount();
  if ($n_notification > 0) {
    $n_number = $db->prepare("SELECT * FROM $tbl_Notifications WHERE noti_status = 'active' other by id ");
    $n_number->execute();
    $n_numbers =  $n_number->rowCount();
    array_push($data, (object)[
      'total' => $n_numbers
    ]);
    while ($notification = $notifications->fetch(PDO::FETCH_ASSOC)) {
      $data[] =  $notification;
    }
  }
  echo json_encode($data);
};


if (isset($_POST['key']) && ($_POST['key'] == '1234')) {
  $countAtiveNoti = $db->prepare("UPDATE $tbl_Notifications SET noti_status = 'inactive' WHERE noti_status='active'");
  $countAtiveNoti->execute();
}
if (!isset($_POST["key"]) && empty($_POST["key"])) {
  echo "API ERROE";
}
?>;