const express = require('express');
const router = require('./routes');
const cors = require('cors'); // when that we use cors we need to install it with npm i cors. and run it with openLiser and closs the app"publec".
const app = express();

app.use(cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// call html file 
//app.use(express.static('public'));
//call ing the routes from the routes folder
app.use('/',router);

const port = 3000;
app.listen(port, () => {
    console.log('Server run port:http://localhost:' + port);
});
