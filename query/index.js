const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

app = express();
app.use(bodyParser.json());
app.use(cors());

posts = {};
 
const eventHandler = (type, data) =>{
    if(type=== "PostCreated"){

        const {id,title} = data;
        posts[id] = {id , title , comments:[]}
    }

    if(type === "CommentCreated"){
        console.log(data);
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
};

app.get('/posts',(req,res)=>{
    res.send(posts);
});

app.post('/events',(req,res)=>{
    const { type , data } = req.body;
    console.log(type);

    eventHandler(type,data);

    console.log(posts);
    res.send({status : 'OK'});
});

app.listen(4002,async ()=>{
    console.log("Listening in port 4002");

    const res = await axios.get('http://localhost:4005/events').catch((err) => {
        console.log(err.message);
      });


      for(let event of res.data){

        console.log("Processing event :"+event.type);

        eventHandler(event.type,event.data)

      }
});
