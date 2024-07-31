const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/tasks',(req, res) => {
  res.send('Tasks')
})
app.post('/tasks',(req, res) => {
  res.send(req.body)
})

// app.post('/product',(req, res) => {
//   res.send(req)
// })

app.listen(3000), () =>{
    console.log("Server run port:3000");

}