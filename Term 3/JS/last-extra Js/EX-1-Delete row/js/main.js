let btns = document.querySelectorAll('.btn')
for (let btn of btns){
    btn.addEventListener('click',function(event){
        let deLete = event.target.closest('tr');
        let conFirm =confirm("Are you ok?");
        if(conFirm){
            deLete.remove();
        }
    })
}
