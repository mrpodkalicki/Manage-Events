const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
    firstName : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 64
    },
    lastName : {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 64
    },
    email : {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 256
    },
    date_created : {
        type: Date,
    },
    tags : {
        type: String,
        required: true,
        minlength: 15,
        maxlength: 512
    }
});
const Event = mongoose.model('Event', eventSchema);