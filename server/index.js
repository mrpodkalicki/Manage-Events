const express = require('express');
const app = express();
const connectToMongoDB = require('./mongooseDB/coonectToDB');

connectToMongoDB(
    ).then(
        console.log('Connected to MongoDB')
    ).catch(err => {
        console.log(err)
});



const PORT  = process.env.PORT || 5000;

app.listen(PORT);