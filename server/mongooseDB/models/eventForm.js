const mongoose = require('mongoose');
const { Schema } = mongoose;


const eventSchema = new Schema({
    title: {
        type: String,
        required:true,
        minlength: 6,
        maxlength: 64
    },
    person: {
        type: mongoose.ObjectId,
        required: true,
    },
    Data: {
        startHour: {
            type : String,
            minlength: 1,
            maxlength: 5
        },
        endHour: {
            type: String,
            minlength: 1,
            maxlength: 5
        },
        dateWhen: {
            type: String,
            required: true,
        },
        dateCreateEvent: {
            type:Date,
            required: true,
            default: Date.now
        }
    },
    tags: {
        type: String,
        required: true,
        minlength: 15,
        maxlength: 512
    }
});

const Event = mongoose.model('Event', eventSchema);
module.exports.Event = Event;

