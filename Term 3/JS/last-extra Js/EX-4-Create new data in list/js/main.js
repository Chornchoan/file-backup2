let theFruit = document.getElementById('fruit')
let btn = document.getElementById('create')
let ul =document.querySelector('ul')
function addData(){
    let li =document.createElement('li');
    li.textContent=theFruit.value;
    console.log(li);
    ul.appendChild(li)
}
btn.addEventListener('click',addData)