const express  = require( 'express' );
const taskModel = require("./model/task_model") 
const app = express();

app.use( express.json() ); // for parsing application/json
app.use( express.urlencoded({ extended: true }) ); // for parsing application/x-www-form-urlencoded

app.get('/task', function(req, res) {
    const tasks = taskModel.getAlltasks();
    res.status(200).json({sucess: true, data:tasks});
})
app.get('/task/:id',(req, res)=> {
    const task = taskModel.show(parseInt(req.params.id));
    if(!task){
        res.status(404).json({ success: false, message:`NoTask found with given id "${req.params.id}` });
        }
    res.status(200).json({sucess: true, data:task});
})




const port = 3000;
app.listen(port,()=>{
    console.log('Server is running on port:'+ port);

})