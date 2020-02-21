class Event {
    constructor( title, personId, eventData, tags ){
        this.title = title;
        this.personId = personId;
        this.eventData = eventData;
        this.tags = tags;
    };
    creatEvent(EventModel){
        return new EventModel({
            title: this.title,
            personId: this.personId,
            eventDate: {
                startHour:  this.eventData.startHour,
                endHour:    this.eventData.endHour,
                dateWhen:   this.eventData.dateWhen,
            },
            tags : this.tags
        });
    };
}
module.exports.Event = Event;
