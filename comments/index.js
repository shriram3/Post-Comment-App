const express =require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require("crypto");

const app=express();

app.use(bodyParser.json());

const commentsByPostID={};

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostID[req.params.id] || []);
});

app.post('/posts/:id/comments',(req,res)=>{

    const commentId= randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostID[req.params.id] || [];

    comments.push({id : commentId, content});

    commentsByPostID[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(4001,()=>{
    console.log("Listening in port 4001")
}
);