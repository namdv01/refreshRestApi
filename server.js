const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const homeRoute = require('./routes/homeRoute');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect(process.env.URL,
    {useNewUrlParser:true},
    () => {
        console.log('connect database success!!!');
    }
);

app.use(express.json());
app.use(cors());

app.use('/',homeRoute);

app.listen(process.env.PORT,() => {
    console.log('http://localhost:3000');
});