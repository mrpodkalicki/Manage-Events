const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 64
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 64
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 256
    },
});

const Person = mongoose.model('Person', personSchema);



module.exports.Person = Person;