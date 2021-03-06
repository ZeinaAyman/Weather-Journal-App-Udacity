// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3030;

const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})

//Get Route, send js object
app.get('/getData', (request, response)=> {
  response.send(projectData);
});

//Post route
app.post('/saveData', (request, response) => {
  //request.body contains temperature, date and content. use three dots { ...} to avoid having any changes registered to the request.body
  projectData = { ...request.body};
  console.log(projectData);
  //closing the request
  response.end();
})
