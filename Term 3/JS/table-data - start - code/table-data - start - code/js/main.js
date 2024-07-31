function getTotal() {
    // TODO 
    let rows = document.querySelectorAll('tbody tr')
    let sum = 0
    for (let tr of rows) {
        let value = tr.lastElementChild.textContent.replace('$', '');
        sum += parseInt(value);
    }
    total.textContent = sum + "$";

}

function getQuantities(e) {
    // TODO
    let qty = e.target.value;
    let tduniPrice = e.target.closest('td').nextElementSibling.textContent.replace('$', '');

    // update total
    let totalPrice = parseInt(qty) * parseInt(tduniPrice);
    let lastchild = e.target.closest('tr').lastElementChild;
    lastchild.textContent = totalPrice + "$";
    getTotal();
}

let quantities = document.querySelectorAll('input');
let total = document.querySelector('.total');
for (let qty of quantities) {
    qty.addEventListener('change', getQuantities);
}

