const { log } = require('console');
const fs = require('fs');
function load(){
    return JSON.parse(fs.readFileSync("tasks.json"));
}
function save(data){
    fs.writeFileSync("tasks.json",JSON.stringify(data));// we used writeFileSync for add code
}
function getAllTasks(title = null){
    const tasks = load();
    if(title){
        return  tasks.filter(task=> task.title.toLowerCase().includes(title));
    }
    return tasks;
}

function show(id){
    const tasks = load();
    const task =  tasks.find(task=>task.id === id);
    return task;


}
function store(newTask){
    const tasks = load();
    const task =  {
        id: tasks.length+1,
        title: newTask.title,
        completed:newTask.completed
    }
    tasks.push(task);
    save(tasks);
    return task;
}

function destroy(id){
    const tasks = load();
    const index = tasks.findIndex(task => task.id===id);
    if  (index !== -1) {
        tasks.splice(index,1);
        save(tasks);
        return "Delete sucess";
    }
}

function update(id,data){
    const tasks = load();
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const task={...tasks[index], ...data};
        tasks [index] = task;
        save(tasks);
        return task
    }
}
function updateStatus(id,status){
    const tasks = load();
    const index = tasks.findIndex(task =>task.id === id);
    if (index !== -1) {
        console.log(tasks[index].completed);
        console.log(status.completed);
        tasks[index].completed = status.completed;
        save(tasks);
        return status;
    }
}
function isComplet(id){
    const tasks = load();
    const index = tasks.findIndex(task =>task.id === id);
    if (index !== -1) {
        tasks[index].completed = true
        save(tasks);
        return tasks[index].completed;
    }
}
function isNotcomplet(id){
    const tasks = load();
    const index = tasks.findIndex(task =>task.id === id);
    if (index !== -1) {
        tasks[index].completed = false
        save(tasks);
        return true;
    }
}
function isCompletAll(){
    const tasks = load();
    const task = tasks.filter(task =>task.completed === true);
    return task;
}
function isNotompletAll(){
    const tasks = load();
    const task = tasks.filter(task => task.completed === false);
    return task;
}
module.exports.getAllTasks=getAllTasks;
module.exports.show=show;
module.exports.store=store;
module.exports.destroy=destroy;
module.exports.update=update;
module.exports.updateStatus=updateStatus;
module.exports.isComplet=isComplet;
module.exports.isNotcomplet=isNotcomplet;
module.exports.isCompletAll=isCompletAll; 
module.exports.isNotompletAll=isNotompletAll;  
