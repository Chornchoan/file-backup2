const  express = require( 'express' );
const { getData, save } = require('./util/functions');
const {v4: uuidv4} = require( 'uuid');
const  app = express();
const port = 3000;
app.listen(port, () => {console.log(`Server running on port:${port}`);});
app.use(express.json());    
app.use(express.static('public'));   //Serve static files from the

let items = getData('./database/items.json') ;

// get all item 
app.get('/api/v1/items', (req , res) =>{
    res.json({massage:"Successfully", items: items })
});

// create item 
app.post('/api/v1/items' , (req ,res)=>{
    const {name, price} = req.body;
    let newItem ={
        id:uuidv4(),
        name: name,
        price: price,

    };
    //add the new item 
    items.push(newItem);
    // save the item to file
    save('./database/items.json' , items )
    res.json({message:'item created succesfully ', items});
    
});

app.get('/api/v1/items/:id', (req , res)=> {
    const id =req.params.id;
    const item =  items.find(item =>  item.id === id);
    if(item != undefined){
       res.json({message:"item one found: ", item: item});
    }else{
        res.status(404).json({message : " item not found"});
    }
});
app.delete('/api/v1/items/:id' , (req,res)=>{
    const  id=req.params.id;
    const index = items.findIndex(item => item.id===id );
    if(index!==-1){
        items.splice(index , 1);
        save("./database/items.json" , items);
        res.json({ message : 'item successfully deleted' });
    }else{
        res.status(404).json({message : "the item is not found"});
    }
});

app.put("/api/v1/items/:id", (req, res) => {
   const id = req.params.id ;
   const index = items.findIndex(item => item.id ===id);
   if(index != -1){
    const item = item[index];
    item.name = req.body.name;      
    item.price = req.body .price;
    save('./database/items.json',items);
   }else{
    res.status(404).send({message:"item not found!"});
   };
});