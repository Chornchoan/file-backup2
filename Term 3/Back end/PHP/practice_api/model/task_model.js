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
function show(title = null){
    const tasks = load();
    if(title){
        return  tasks.filter(task=> task.title.toLowerCase().includes(title));
    }
    return tasks;
}


module.exports.getAllTasks=getAllTasks;
module.exports.show=show;