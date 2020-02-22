const   Event   = require('../Classes/Event.class');
const  Person  = require('../Classes/Person.class');
const EventModel   = require('../mongooseDB/models/eventForm.model');
const  PersonModel  = require('../mongooseDB/models/personForm.model');



const  createEvent = async ( )=> {
    const person = new Person('pawloe', 'kszys', 'sddi@gm.pl');
        const schemaPerson = await person.creatPerson(PersonModel);
        try{
            await  person.checkIfExistInDB(PersonModel, {"email":person.email})
            if(!person.IfExistinDB){
                     await person.saveToDb(schemaPerson)
                    .then(obj => console.log(`save to db person ${obj}`) );
            }
            const event = new Event(
                "Fast and Good",
                person.idObjInDb,
                {
                    startHour: "1",
                    endHour: "16",
                    dateWhen: "10.12.21",
                },
                "#js#react")
            const schemaEvent = await event.creatEvent(EventModel);
            await event.checkIfExistInDB(EventModel,{
                "title":"Fast and Good",
                "personId":person.idObjInDb,
                "dataInformation": {
                    "startHour": "1",
                    "endHour": "16",
                    "dateWhen": "10.12.21",
                },
                "tags": "#js#react"
            })

            await event.saveToDb(schemaEvent).then(console.log('save'));
            await console.log(event)
        }catch (err) {
            console.log(err.message,'ERdRsR')
        };
}






module.exports = createEvent;
