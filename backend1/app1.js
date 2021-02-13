const express = require('express');
const app1 = express();
const fetch   = require('node-fetch');

app1.use((req, res) => {
    fetch("http://localhost:4002/data")
    .then(res => res.json())
    .then(data => {
        res.send({ data });})

   //res.json({ message: 'Votre requête a bien été reçue !' }); 

});

module.exports = app1;

/*fetch("http://localhost:4002/data")
.then((response)=> response.json())
.then((data)=>console.log(data))
.catch(error => console.log("error"))*/





/*var express = require('express');
var app1 = express.Router();
var request = require('request');
app1.get('/', function(req, res, next) {
  request({
    uri: 'https://localhost:4002/data/.json'
  }).pipe(res);
})*/



/*const express = require('express')
const app1 = express()
const parkings = require('https://localhost:4002/data')

app1.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app1.listen(3000, () => {
    console.log("Serveur à l'écoute")
})*/

/*const fetch = require('node-fetch');

let url = "http://localhost:4002/data";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
    });*/

module.exports = app1;