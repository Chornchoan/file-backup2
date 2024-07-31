// let buttons = document.querySelectorAll('button')
// function removeCard (event){
//     let card = event.target.closest('.card')
//     card.remove()
// }
// buttons[1].addEventListener('click',removeCard)


let card =document.querySelector('.card')
function removeCard (event){
    console.log(event.target.tagName);{
        if (event.target.tagName === 'BUTTON');
        card.remove();
    }
}
card.addEventListener('click',removeCard)