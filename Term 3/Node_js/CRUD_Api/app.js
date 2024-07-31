
const expresss = require("express");
const app = expresss();
const {v4: uuidv4} = require( 'uuid' );
const {getPro,savePro} = require('./functions');
const port = 3000 ;
app.use(expresss.json());
const products = getPro('./data/production.json');
app.listen(port, ()=> {
    console.log(`Server is running on Port http://localhost:${port}`);
});

app.get('/api/product', (req , res)=>{
    return res.send({ message:'welcome my product api'});
});

app.get('/api/product/:id', (req,res)=>{
    const id = req.params.id;
    const product = products.find(product => product.id  === id);
    if(products  != undefined) {
        res.json({message: "product is funded: " , product: product});
    } else{
        res.status(404).json({message:"no product found"});
    }
})

app. post('/api/product', (req, res)=>{
    const {name, price}= req.body;
    const  newProduct = {
        id : uuidv4(),
        name : name,
        price : price
    };
    products.push(newProduct);

    savePro('./data/production.json', newProduct)

    res.status(201).json(message:"successfully", newProduct);
})