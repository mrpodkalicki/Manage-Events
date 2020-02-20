const mongoose = require('mongoose');
const keys = require('../config/keys');

const   connectToDB = async () =>  {

        mongoose.connect(keys.mongoURI, {
            useMongoClient: true,

        });
};

const  runConnectToDb =async() =>{
        await connectToDB()
};

module.exports = runConnectToDb;





