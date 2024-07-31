const fs = require( 'fs' );

 function lode(){
    return JSON.parse(fs.readFileSync("tasks.json"));
 }

function save(data){
    fs.writeFileSync('tasks.json',JSON.stringify(data));
    
}

function getAllTasks(){
    const tasks  = lode(); 
    return tasks;
    

}
module.exports.save = save;
module.exports.lode = lode;
module.exports.getAllTasks = getAllTasks;