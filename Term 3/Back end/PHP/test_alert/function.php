<?php
require_once("db.php");
function notifications()
{
    echo '
        <div class="nf-all">
        <div class="nf-area">
            <button class="btn-noti" id="nf-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
          </svg></button>
            <span id="nf-n">0</span>
        </div>
            <div class="nf-message" id="notifications">Noting</div>
        </div>
    ';
}
function seenNotification($uniqueid) {
    $db = new Connect;
    global $tbl_Notifications;

    $seenNoti = $db->prepare("UPDATE $tbl_Notifications SET noti_seen='seen' WHERE noti_uniqueid=$uniqueid");
    $seenNoti->execute();
    
}
function postNotification($type, $uniqueid){
    $db = new Connect;
    global $tbl_Notifications;
    $date = date('F J, Y, g:i a');
    if($type == 'contact'){
        $noti_url = 'contact.php';
        $noti_table ='contact';
        $uniqueid_user = '0';

    }
    $isert = $db-> prepare("INSERT INTO $tbl_Notifications SET 
    noti_user=:noti_user, noti_status=:noti_status, noti_type=:noti_type,  
    noti_uniqueid=:noti_uniqueid,noti_url=:noti_url, noti_data=:noti_data, 
    noti_table=:noti_table, noti_seen=:noti_seen,");
    $isert -> execute(array(
        "noti_user"=>$uniqueid_user ,
        "noti_status"=> 'active',
        "noti_type"=> $type,
        "noti_uniqueid"=> $uniqueid,
        "noti_url"=> $noti_url,
        "noti_data"=> $date,
        "noti_table"=> $noti_table,
        "noti_seen"=> 'unseen'
    ));
}