function saveProducts() {
    localStorage.setItem('productsData', JSON.stringify(productsData));
}

function loadProducts() {
    let loadProducts = JSON.parse(localStorage.getItem('productsData'));
    if (loadProducts != undefined) {
        productsData = loadProducts
    }
    else {
        saveProducts()
    }
    
}

function renderProducts() {
    // call load products 
    loadProducts();
    // remover old tbody 
    tbody.remove();
    // create new table body element as "tBody" 
    const tBody = document.createElement('tbody')

    // create all table rows depending data from product list 
    let productlist = productsData.products;
    for (let data of productlist) {
        // create table row as "tRow"
        let tRow = document.createElement("tr")
        // create td element for name as "tdName"
        let tdName = document.createElement('td')
        // add textContent to td name  from product name
        tdName.textContent = data.name;

        // create td element for quantity as "tdQty"
        let tdQty = document.createElement('td');

        // add dataset as id to quantity from product id 
        tdQty.dataset.id= data.id;

        // create Input element as "qtyInput"
        let qtyInput = document.createElement('input');
        // add attribute type input to number 
        qtyInput.setAttribute('type','number') ;

        // add value to input from product quantity 
        qtyInput.value = data.quantity;
        
        // append qtyInput to tdQty 
        tdQty.appendChild(qtyInput);

        // create td element for unit price as "tdUnitPrice"
        let tdUnitPrice = document.createElement("td");

        // add text content to tdUnitPrice from product price + "$"
        tdUnitPrice.textContent = data.price + "$"

        // create td element for total price as "tdTotalPrice"
        let tdTotalPrice = document.createElement('td');
        
        // add text content to tdTotalPrice by product price * product quantity +"$"
        tdTotalPrice.textContent = parseInt(tdUnitPrice.textContent)*parseInt(qtyInput.value) + "$"

        // append tdName, tdQty, tdUnitPrice, tdTotalPrice to tRow
        tRow.appendChild(tdName);
        tRow.appendChild(tdQty);
        tRow.appendChild(tdUnitPrice);
        tRow.appendChild(tdTotalPrice);
        // append tRow to tBody 
        tBody.appendChild(tRow)
        // append tbody to table 
        table.appendChild(tBody)
    }
}  
// products data 
let productsData = {
    products: [],
    latestId: null
};

const tbody = document.querySelector('tbody')
let total = document.querySelector('.total');
let table = document.querySelector('table')


// once you started we need to call load data and renderProductsData 
loadProducts()
renderProducts();
function upDateprice(e){
    let name = e.target.closest('tr').firstElementChild.textContent;
    for (const data of productsData.products) {
        // console.log(data);
        if (name == data.name) {
            data.quantity=e.target.value;
            console.log(data.quantity);
            saveProducts();
            
            renderProducts()
        }
    }
}
const inputs = document.querySelectorAll("input")
for (const input of inputs) {
    input.addEventListener('change',upDateprice)
    
}
// localStorage.clear();