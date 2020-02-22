const  Person  = require('../Classes/Person.class');

class Event extends Person{
    constructor( title, personId, eventData, tags ){
        super();
        this.title = title;
        this.personId = personId;
        this.eventData = eventData;
        this.tags = tags;
    };
    async creatEvent(EventModel){
        return await new EventModel({
            title: this.title,
            personId: this.personId,
            dataInformation: {
                startHour:  this.eventData.startHour,
                endHour:    this.eventData.endHour,
                dateWhen:   this.eventData.dateWhen,
            },
            tags : this.tags
        });
    };
}
module.exports = Event;
