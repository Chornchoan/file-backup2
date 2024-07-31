const fs = require('fs');

function load(){
    return JSON.parse(fs.readFileSync("tasks.json"));
}
function save(data){
    fs.writeFileSync("tasks.json",JSON.stringify(data));
}
function getAlltasks(){
    const  tasks=load();

    return tasks;
}
function show(id){
    const tasks =load();
    const task = tasks.find(task => task.id === id);
    return task;
}
module.exports.getAlltasks=getAlltasks;
module.exports.show=show;