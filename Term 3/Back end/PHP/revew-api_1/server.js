const express = require('express')
const taskModel = require('./models/task_model')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/task', function (req, res) {
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAllTasks(search.title);
    res.status(200).json({success:true, data:tasks});
})

app.get('/task/:id', (req, res) => {
    const task = taskModel.show(parseInt(req.params.id));
    if  (!task) {
      res.status(404).json({success: false, message:`'can't find any task with id ${req.params}` })  
    }
    // res.send(task);
    res.status(200).json({ success : true ,data:task });
});
app.post('/task', (req, res) => {
    const task = taskModel.store(req.body);
    // res.send(task);
    res.status(200).json({ success : true ,message:'Task has been created successfully!', data
    : task});
});

app.delete('/task/:id', (req, res) => {
    const task = taskModel.destroy(parseInt(req.params.id));
    if(!task){
        return res.status(404).json({ success :false ,message:`'can't delete task ${req.params.id}'` });
    }
    // res.send(task);
    res.status(200).json({ success : true ,message:`"The Task Has Been Deleted Successfully ${req.params.id}"`});
    
});

app.put('/task/:id', (req, res) => {
    const task = taskModel.update(parseInt(req.params.id), req.body);
    if(!task){
        return res.status(404).json({ success :false ,message:`'can't update task ${req.params.id}'` });
    }
    // res.send(task);
    res.status(200).json({ success : true ,message:"The Task Has Been Updated Successfully", data : task});

});
app.put('/updateStatus/:id',(req,res)=>{
    const task = taskModel.updateStatus(parseInt(req.params.id),req.body);
    if (!task) {
        res.status(404).json({ success: false, message:`can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data: task });
});
app.put('/task/isComplet/:id',(req,res)=>{
    const task = taskModel.isComplet(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message:`can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data: task });
});
app.put('/task/isNotcomplet/:id',(req,res)=>{
    const task = taskModel.isNotcomplet(parseInt(req.params.id));
    if (!task) {
        res.status(404).json({ success: false, message:`can't find any task with ID ${req.params.id} `})
    }
    res.status(200).json({ success: true, data:task});
});

app.put('/isCcompletAll',(req,res)=>{
    const task = taskModel.isCompletAll();
    res.status(200).json({ success: true, data: task});
});
app.get('/isNotcompletAll',(req,res)=>{
    const task = taskModel.isNotompletAll();
    res.status(200).json({ success: true, data: task});
});





const port = 3000;
app.listen(port, () => {
    console.log('Server run port:' + port);
})