const express = require ("express");
const bodyParser = require ("body-parser");
const axios = require ("axios")

const app=express();
app.use(bodyParser.json());

// Store all the events details
const Events = [];


app.post('/events',(req,res)=>{
    const event = req.body;
    console.log("events is called");
    console.log(req.body);

	Events.push(event);


    axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });
    axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });
    axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });
  	axios.post('http://localhost:4003/events', event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: 'OK' });

});

app.get('/events',(req,res)=>{
	res.send(Events);
});


app.listen(4005,()=>{
    console.log("Listening in port 4005");
});
