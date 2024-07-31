const express = require( 'express' );
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/task'(req, res) => {

});

const post = 3000;
app.listen(post, () => {
    console.log('server run post:'+ post)
    
});