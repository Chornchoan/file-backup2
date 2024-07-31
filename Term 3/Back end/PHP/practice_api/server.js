const express = require('express')
const taskModel = require('./model/task_model')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//list api
app.get('/task', function (req, res) {
    const search = req.query;
    console.log(search.title);
    const tasks = taskModel.getAllTasks(search.title);
    res.status(200).json({success:true, data:tasks});
});
//show api 
app.get('/task/:id',(req,res)=> {
    const task = taskModel.show(parseInt())
    if (task){
        res.status(404).send({success :false,message:"Unit One make api" ,data : task})
    }
    res.status(200).json({success:true, message: 'Data has been received', data: task })
});
//delete api
app.get('/task/:id',(req,res)=> {
    const task = taskModel.show(parseInt())
    if (task){
        res.status(404).send({success :false,message:"Unit One make api" ,data : task})
    }
    res.status(200).json({success:true, message: 'Data has been received', data: task })
});



const port =3000;
app.listen(port , ()=>{
    console.log('Server is running on port:' + port)
});