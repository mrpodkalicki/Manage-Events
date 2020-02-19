const mongoose = require('mongoose');
const keys = require('../config/keys');



function connectToDB() {
    try {
         mongoose.connect(keys.mongoURI, {
             useNewUrlParser: true,
             useUnifiedTopology: true,
        });

            console.log('Connected to MongoDB...');
    } catch (err) {
        console.error('Connection failed...', err);
    }
}
connectToDB()





