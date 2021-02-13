/*const express = require('express');

const app2 = express();

app2.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });


module.exports = app2;*/

 const express = require('express');
const app2 = express();
const data = require('./data.json');

app2.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app2.get('/data', (req,res) => {
    res.status(200).json(data)
});

app2.listen(4002, () => {
    console.log("Serveur à l'écoute")
});

module.exports = app2;