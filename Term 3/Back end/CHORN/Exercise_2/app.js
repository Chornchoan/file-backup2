const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { getPost,savePost } = require('./functions');
const app = express();
const port = 3000;
app.use(express.json());
const posts = getPost('./database/posts.json');
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
app.get('/', (req, res) => {
   // TODO
   return res.send({ message: "Welcome to our API"});

});
/**
 * Description: CRUD posts
 * Endpoint: /api/posts
 */

// Get posts
app.get('/api/posts', (req, res) => {
   // TODO
   res.json({ message: "Welcome to our API",posts: posts});
    
});


// Get post
app.get('/api/posts/:id', (req, res) => {
    // TODO
    const id =req.params.id;
    const post =  posts.find(post =>  post.id === id);
    if(posts!= undefined){
       res.json({message:"post is found: ", post: post});
    }else{
        res.status(404).json({message : " post not found"});
    }
});

// Create a new post
app.post('/api/posts', (req, res) => {
    // TODO
    const {title,description}=req.body;
    const newPost={
        id:uuidv4(),
        title:title,
        description:description
    };
    posts.push(newPost);

    savePost('./database/posts.json',posts);

    res.status(201).json(newPost);
    

});

// Delete post
app.delete('/api/posts/:id', (req, res) => {
    // TODO
    const id= req.params.id;
    const index= posts.findIndex(post=> post.id===id );
    if(index!==-1){
        posts.splice(index,1);
        savePost('./database/posts.json',posts);
        
            res.json({ message : 'the post successfully deleted' });
    }else{
            res.status(404).json({message : "the post is not found"});
    };
})

// Update a post
app.put('/api/posts/:id', (req, res) => {
    // TODO
    let id= req.params.id;
    let index= posts.findIndex(post=> post.id===id );

    if(index !=-1){
        let post = posts[index];
        post.title = req.body.title;
        post.description = req.body.description;
      

        savePost('./database/posts.json',posts);

        res.json({ message : 'the post successfully for update' })

   }else{
        res.status(404).send({message:"post update not found!"});
   };
});