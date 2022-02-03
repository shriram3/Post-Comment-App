const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require ('cors');

const app= express();
app.use(bodyParser.json());
// Importing Cors into our app
app.use(cors());

const posts={};


app.get('/posts',(req,res)=>{
    res.send(posts);
});

app.post('/posts',(req,res)=>{
    const id=randomBytes(4).toString('Hex');
    const {title}=req.body;
    
    posts[id]={
        id,title
    };

    res.status(201).send(posts[id]);
});

// changing port values

app.listen(4000,()=>{
 console.log("listening in port 4000")
});
