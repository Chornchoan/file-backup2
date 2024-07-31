// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------

function addItem() {
  // 1- Create a new task
  // TODO
  let new_tsks ={descripTion:'value1',prioriTy:'value2'}
  

  //  2- Set the description from the text field
  // TODO
  let descripTion=document.getElementById('description')


  // 3- Set the priority from select field
  // TODO
  let prioriTy =document.getElementById('priority').value;
console.log(prioriTy);
  // 4- Add the new object to the array
  // TODO
  tasks.appendchild(descripTion)

  console.log(tasks);
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------

let tasks = [];

// run the function addItem when you click on the button
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", addItem);
