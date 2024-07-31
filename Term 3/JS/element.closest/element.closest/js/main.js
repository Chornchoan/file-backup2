// const paragraph = document.querySelector('p');
// console.log(paragraph.closest('.inner'));

// console.log(closestDiv); // This will log the <div class="inner"> element

let button = document.querySelector('button')
function deleteElement(){
    let inner = button.closest('.inner')
    inner.remove()
    console.log(inner);
}
button. addEventListener('click',deleteElement)