const fs = require( 'fs' );
function load(){
    return JSON.parse( fs.readFileSync("tasks.json") ) ;
}
function save(data){
    fs.writeFileSync("tasks.json",JSON.stringify(data));
}

function getAllTasks(title=null){
    const  tasks = load();
    if(title){
        return tasks.filter(task => task.title.toLowerCase().include(title.toLowerCase()));

    }

}

module.exports.getAllTasks=getAllTasks;