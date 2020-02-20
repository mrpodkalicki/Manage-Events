const express = require('express');
const app = express();
const runConnectToDb = require('./mongooseDB/coonectToDB');

runConnectToDb().then(
    console.log('Connected to MongoDBtyujykuijl...')

).catch(err => {
    console.log(err)
});







const PORT  = process.env.PORT || 5000;

app.listen(PORT);