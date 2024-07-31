const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/tasks',(req, res) => {
  res.send("tasks2")
  
  });
app.post('/tasks',(req, res) => {
  res.send(req.body);
});
app.listen(3000), () =>{
    console.log("Server run port:3000");

}