const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect();



const PORT  = process.env.PORT || 5000;

app.listen(PORT);