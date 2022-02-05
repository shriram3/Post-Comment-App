const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser =require("body-parser");

app = express()
app.use(bodyParser.json());
app.use(cors());

app.post('/events', async(req,res)=>{
    const { type, data } = req.body;

    if (type === "CommentCreated"){
        console.log("in moderator");
        const comment = data.content;
        const Mod_status = comment.includes('Fuck') ? 'Rejected' : 'Approved';

        await axios.post('http://localhost:4005/events',{
            type: 'CommentModerated',
            data:{
                id: data.id,
                content: data.content,
                postId : data.postId,
                status : Mod_status
            }
        }).catch((err) => {
            console.log(err.message);
          });
    }


    res.send();
});

app.listen(4003, ()=>{
    console.log("listening on port 4003");
});