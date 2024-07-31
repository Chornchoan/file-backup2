// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  let divs = document.createElement('div')
  divs.className = 'container';
  console.log(divs);
  // 2 - For all tasks,  create a new div (class : item), (textContent : task.description)
  for (let task of array){
    let items = document.createElement('div')
    items.className = 'item';
    items.textContent = task.description;
  // 3 - The priority defines the color of your task (1 (HIGH) = red, 0 (LOW) = gray)
    let color = 'red';
    if (task.priority === 0){
      color = 'grey'
    }
    items.style['background-color'] = color;
  // 4 - append it the container
    divs.appendChild(items)
  }
  // 5 - append div class container to body
  document.body.appendChild(divs)
}

displayArray(tasks);
