const express = require( 'express' );
const taskModel = require('./model/task_model.js');
const router = express.Router();

router.get('/tasks', function(req,res) {
    // get all tasks from the database and
    // const shearch = req.query;
    // console.log(shearch.title);
    const tasks = taskModel.getAllTasks();
    res.status(200).json({success: true, data: tasks});

});