const  Person  = require('../Classes/Person.class');

class Event {
    constructor( title, personId, dataInformation, tags ){

        this.title = title;
        this.personId = personId;
        this.dataInformation = dataInformation;
        this.tags = tags;
        this.IfExistinDB = false;
        this.idObjInDb = {};
    };
    async creatEvent(EventModel){
        return await new EventModel({
            title: this.title,
            personId: this.personId,
            dataInformation:  {
                startHour:  this.dataInformation.startHour,
                endHour:    this.dataInformation.endHour,
                dateWhen:   this.dataInformation.dateWhen,
            },
            tags : this.tags
        });
    };
}
Event.prototype.checkIfExistInDB = Person.prototype.checkIfExistInDB;
Event.prototype.saveToDb = Person.prototype.saveToDb;


module.exports = Event;
