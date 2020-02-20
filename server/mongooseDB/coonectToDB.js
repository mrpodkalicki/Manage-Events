const mongoose = require('mongoose');
const keys = require('../config/keys');

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports =  connectToMongoDB = async () =>  {
       await  mongoose.connect(keys.mongoURI, options);
};







