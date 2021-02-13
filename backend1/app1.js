const express = require('express')
const app1 = express()
const parkings = require('http://localhost:4002/data')

app1.get('/parkings', (req,res) => {
    res.status(200).json(parkings)
})

app1.listen(4003, () => {
    console.log("Serveur à l'écoute")
})