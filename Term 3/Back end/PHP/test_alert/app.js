$(document).ready(function() {
    showNotifications();
    setInterval(showNotifications, 5000);
    
    $('#notifications').hide();
    $('#nf-btn').click(function(e) {
        e.stopPropagation();
        $('#notifications').toggle();
        seenNotification();
    });

    $('html').click(function(){
        $('#notifications').hide();
    });
});

function showNotifications(){
    $.ajax({
        type: "POST",
        url: "fetch.php",
        data: {
            key: '123'
        },
        cache: false,
        success: function(data){
            var contentData = JSON.parse(data);
            
            $('#notifications').html('');
            console.log(contentData);
            if(contentData.length > 0){
                for(let i = 0; i < contentData.length; i++){
                    let noti_data = contentData[i].noti_data;
                    let noti_user = contentData[i].noti_user;
                    let noti_seen = contentData[i].noti_seen;
                    let noti_status = contentData[i].noti_status;
                    let noti_table = contentData[i].noti_table;
                    let noti_type = contentData[i].noti_type;
                    let noti_uniquied = contentData[i].noti_uniquied;
                    let noti_url = contentData[i].noti_url;

                    if(noti_type == 'contact'){
                        noti_type = ' you have a new message';
                    }
                    if(noti_type == 'orders'){
                        noti_type = 'you have an order';
                    }
                    if (noti_seen == 'unseen'){
                        noti_seen = 'success';
                    } else {
                        noti_seen = 'dark';
                    }

                    let resultDiv = `
                        <a href="${noti_url}?notification=${noti_uniquied}">
                            <div class="alert alert-${noti_seen}" role="alert" title="${noti_data}">
                                ${noti_type}
                            </div>
                        </a>
                    `;
                    $("#notifications").append(resultDiv);
                }
                $("#nf-n").html(contentData[0].total);
            } else {
                $("#notifications").html('<p>No Notification</p>');
                $("#nf-n").html(0);
            }
        },
        error: function(xhr, status, error){
            console.log(xhr);
        }
    });
}

function seenNotification(){
    $.ajax({
        type: "POST",
        url: "fetch.php",
        data: {
            key: "1234"
        },
        cache: false,
        success: function(data) {

        }
    });
}