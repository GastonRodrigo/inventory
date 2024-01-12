const dotenv = require ('dotenv').config();
const express = require ('express');
const mongoose = require ('mongoose');
const bodyParser = require ('body-parser');
const cors = require ('cors');

const app = express ()

// Middlewares
app.use (express.json())
app.use (express.urlencoded ( {extended: false}))
app.use (bodyParser.json())


// Routes
app.get ('/', (req, res) => {
    res.send ('Home Page');
});


// Conecta DB & start server
const PORT = process.env.PORT || 7592;

mongoose
    .connect (process.env.MONGO_URI)
    .then (() => {
        app.listen (PORT, () => {
            console.log (`Server Running on Port ${PORT}`)
        })
    })
    .catch ((err) => console.log(err))