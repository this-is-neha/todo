const express = require('express');
const cors = require('cors');
const Joi = require("joi");
const helmet = require("helmet");
const mongoose = require("mongoose");
const path = require('path'); 

require("./db.config");
const mainRoute = require("./routing.config");

const app = express();

app.use(cors({
    origin:  'https://goalggridd.netlify.app/'  ,
   
    allowedHeaders: 'Content-Type, Authorization', 
}));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(mainRoute);

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

console.log("Express server is running");
module.exports = app;
