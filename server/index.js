"use strict";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectToMongoDB = require('./mongooseDB/coonectToDB');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(bodyParser.json());

connectToMongoDB(
    ).then(
        console.log('Connected to MongoDB')
    )
    .catch(err => {
        console.log(err)
});

app.use('/events',require('./routes/showEvents.route'));
app.use('/createEvent',require('./routes/createEvent.routes'));




const PORT  = process.env.PORT || 5000;

app.listen(PORT);