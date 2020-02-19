const express = require('express');
const app = express();
require('./mongooseDB/coonectToDB');




const PORT  = process.env.PORT || 5000;

app.listen(PORT);