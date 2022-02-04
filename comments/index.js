const express =require("express");
const bodyParser = require("body-parser");
const {randomBytes} = require("crypto");
const cors = require("cors");
const axios = require("axios");

// Importing Cors package - to  Relax the security applied to the API
const app=express();
app.use(bodyParser.json());
app.use(cors());

const commentsByPostID={};

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsByPostID[req.params.id] || []);
});

app.post('/posts/:id/comments',async (req,res)=>{

    const commentId= randomBytes(4).toString('hex');
    const {content} = req.body;

    const comments = commentsByPostID[req.params.id] || [];

    comments.push({id : commentId, content});

    commentsByPostID[req.params.id] = comments;

    await axios.post('http://localhost:4005/events',{
        type:"CommentCreated",
        data:{
            id:commentId,
            content,
            postId : req.params.id
        }
    }).catch((err) => {
        console.log(err.message);
      });  ;

    res.status(201).send(comments);
});

//Event listener
app.post('/events',(req,res)=>{
	console.log("Event recieved:"+req.body.type);

	res.status({});
});

app.listen(4001,()=>{
    console.log("Listening in port 4001")
}
);