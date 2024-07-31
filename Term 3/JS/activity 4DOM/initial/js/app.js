let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the i 3 to the second container
let item3 =container1.lastElementChild
container2.appendChild(item3)

//  2- Remove i 4
let item4 = container2.firstElementChild
item4.remove()
// 3- Create a new item 10 and add it to container 3
let item10 = document.createElement('div')
item10.setAttribute('class', 'item')
item10.textContent ='10';
container3.appendChild(item10)
//  4- Set all item in blue containers  background color to  red
container1.background.style.color ='red'
container3.background.style.color ="orange"