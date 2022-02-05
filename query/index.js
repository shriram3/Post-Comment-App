const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());
app.use(cors());

posts = {};

app.get('/posts',(req,res)=>{
    res.send(posts);
});

app.post('/events',(req,res)=>{
    const { type , data } = req.body;
    console.log(type);


    if(type=== "PostCreated"){

        const {id,title} = data;
        posts[id] = {id , title , comments:[]}
    }

    if(type === "CommentCreated"){
        
        const {id, postId , content, status} = data;

        const post = posts[postId];
        post.comments.push({id,content, status});
        
    }

    if (type === "CommentUpdated"){
        console.log("In comment updated");

        const {id, postId , content, status} = data;

        const post = posts[postId];
        const comment = post.comments.find(comment=>{
            return comment.id == id ;
        })
        comment.status =status ;
        console.log(comment);
    }
    
    console.log(posts);
    res.send({status : 'OK'});
});

app.listen(4002,()=>{
    console.log("Listening in port 4002")
});
