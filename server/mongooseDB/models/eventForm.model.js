const mongoose = require('mongoose');
const { Schema } = mongoose;


const eventSchema = new Schema({
    title: {
        type: String,
        required:true,
        minlength: 6,
        maxlength: 64
    },
    personId: {
        type: mongoose.ObjectId,
        required: true,
    },
    dataInformation: {
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
            type: Date,
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
        minlength: 5,
        maxlength: 512
    }
});

const EventModel = mongoose.model('Events', eventSchema);
module.exports = EventModel;

