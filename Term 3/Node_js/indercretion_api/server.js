
const express = require('express');
const router = express.Router();
const app = express();

app.use(express.json);
app.use(express.urlencoded( { extended: false } ) );

// import the public file  to make it accessible in the browser
app.use(express.static('public'));

 // for user routers
app.use('/',router);

// manage port for run with browser
const port = 3000;
app.listen(port, () => {
    console.log('server run port: http://localhost:' + port)
});

