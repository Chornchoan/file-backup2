let products=[]
let  productBtn =document.getElementById('addProductBtn');
let productName = document.getElementById('productName');
let productPrice = document.getElementById('productPrice');

function addProduct(){
    let newProduct ={}
    newProduct.name=productName.value;
    newProduct.price = productPrice.value;
    products.push(newProduct)
    saveLocal()
}

function saveLocal(){
    localStorage.setItem('tasks',JSON.stringify (products))

}

function getLocalStroage(){
    let productStorage = JSON.parse(localStorage.getItem('tasks'))
    if(productStorage!=null){
        products=productStorage
    }
}
function removeStorage(){
    localStorage.removeItem('tasks')
}


function claerStorage(){
    localStorage.clear();
}
productBtn.addEventListener('click',addProduct);
getLocalStroage(); 
// removeStorage()
// claerStorage()
console.log(products);

