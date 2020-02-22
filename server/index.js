"use strict"
const express = require('express');
const app = express();
const connectToMongoDB = require('./mongooseDB/coonectToDB');
const eventRoute = require('./routes/events.routes')



connectToMongoDB(
    ).then(
        console.log('Connected to MongoDB')
    ).catch(err => {
        console.log(err)
});

eventRoute()


const PORT  = process.env.PORT || 5000;

app.listen(PORT);