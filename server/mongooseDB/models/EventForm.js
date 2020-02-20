const mongoose = require('mongoose');
const { Schema } = mongoose;

class Event {
    constructor( firstName, lastName, email, date_created, tags  ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.date_created = date_created;
        this.tags = tags;

    }
    creatEvent(EventModal){
        return new EventModal({
            firstName : this.firstName,
            lastName : this.lastName,
            email : this.email,
            date_created : this.date_created,
            tags : this.tags
        })
    }
}


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
    eventData : {
        type: Date,
    },
    tags : {
        type: String,
        required: true,
        minlength: 15,
        maxlength: 512
    }
});

const EventModal = mongoose.model('Event', eventSchema);

const eventOne = new Event("adi", "pppp", "adi@gmail", "20-02-20", "#js#react#redux");

module.exports.eventOne = eventOne;
module.exports.EventModal = EventModal;

