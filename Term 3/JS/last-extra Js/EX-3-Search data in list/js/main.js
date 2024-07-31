let search = document.querySelector('input');
function searchFruits(event){
    let searchList = event.target.value.toLowerCase();
    let lists = document.querySelectorAll('li');
    
    for (const list of lists) {
        let title = list.textContent.toLowerCase();
        if (title.includes(searchList)) {
            list.style.display = 'block';
        }else{
            list.style.display = 'none';
        }
    }
}
search.addEventListener('keyup',searchFruits)