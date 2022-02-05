const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());
app.use(cors());

posts = {};

app.post('/posts',(req,res)=>{
    res.send(post);
});

app.post('/events',(req,res)=>{
    const { type , data } = req.body;

    if(type=== "PostCreated"){

        const {id,title} = data;
        posts[id] = {id , title , comments:[]}
    }

    if(type === "CommentCreated"){
        
        const {id, postId , content} = data;

        const post = posts[postId];
        post.comments.push({id,content});
        
    }
    console.log(posts);
    res.send({status : 'OK'});
});

app.listen(4002,()=>{
    console.log("Listening in port 4002")
});
