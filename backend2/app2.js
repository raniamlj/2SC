/*const express = require('express');

const app2 = express();

app2.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' }); 
 });


module.exports = app2;*/

 const express = require('express');
const app2 = express();
const data = require('./data.json');


app2.get('/data', (req,res) => {
    res.status(200).json(data)
});

app2.listen(4002, () => {
    console.log("Serveur à l'écoute")
});

module.exports = app2;