
function getValue(elements) {
    let result = []
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value)
        }
    }
    return result
}

function showCase(event) {

    const cards = document.querySelectorAll('.card'); //list card
    let arrayCheckbox = getValue(checkboxes); // list array checkbox


    if (arrayCheckbox.length === 0) {
        for (let card of cards) { 
            card.style.display='block';
        }
    }
    else {
        for (let card of cards){
            if(arrayCheckbox.includes(card.firstElementChild.textContent)){
            
                card.style.display='block';
            }else{
             
                card.style.display='none';
            }
        }
    }

}


// Main
const content = document.querySelector('.content');
const checkboxes = document.querySelectorAll('.lang');

for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', showCase);
}

