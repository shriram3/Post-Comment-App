const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require ('cors');
const axios = require ("axios"); 


const app= express();
app.use(bodyParser.json());
// Importing Cors into our app
app.use(cors());

const posts={};


app.get('/posts',(req,res)=>{
    res.send(posts);
});

app.post('/posts',async (req,res)=>{
    const id=randomBytes(4).toString('Hex');
    const {title}=req.body;
    
    posts[id]={
        id,title
    };

    await axios.post('http://localhost:4005/events',{
        type : "PostCreated",
        data : {
            id, title
        }
    }).catch((err) => {
        console.log(err.message);
      });  ;

    
    res.status(201).send(posts[id]);
});

// Event listener

app.post('/events',(req,res)=>{
	console.log("Event recieved:"+req.body.type);

	res.status({});
});

// changing port values

app.listen(4000,()=>{
 console.log("listening in port 4000")
});
