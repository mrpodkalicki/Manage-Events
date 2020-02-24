const Event   = require('../Classes/Event.class');
const Person  = require('../Classes/Person.class');
const EventModel   = require('../mongooseDB/models/eventForm.model');
const PersonModel  = require('../mongooseDB/models/personForm.model');


const createPersonAndSave = async (...personData) =>{
    const [firstName, lastName, email] = personData;
    const person = new Person(firstName, lastName, email);
    const schemaPerson = await person.creatPerson(PersonModel);
    await  person.checkIfExistInDB(PersonModel, {"email":person.email});
    if(!person.IfExistinDB){
        await person.saveToDb(schemaPerson)
            .then(obj => console.log(`save to db person ${obj}`) );
    }
    return person
};

const createEventAndSAve = async ( ...eventDate ) => {
    const [ title, personId, dataInformation, tags ] = eventDate;
    const event = new Event( title, personId, dataInformation, tags );
    const schemaEvent = await event.creatEvent(EventModel);
    await event.checkIfExistInDB(EventModel,{
        title :event.title,
        personId: { $eq:event.personId},
        tags: event.tags,
        'dataInformation.startHour' : event.dataInformation.startHour,
        'dataInformation.endHour' : event.dataInformation.endHour,
        'dataInformation.dateWhen' : event.dataInformation.dateWhen,
    });
    if( !event.IfExistinDB ) {
        await event.saveToDb( schemaEvent ).then( obj => console.log(`save Event : ${obj}` ));
    }
    return event;
};

const  createEvent = async ( )=> {
        try{
            const personObject =  await createPersonAndSave('tomek', 'dawid', 'td@gm.pl');
            const eventObject = await createEventAndSAve(
                "Check your code",
                personObject.idObjInDb,
                {
                    startHour: '9:00',
                    endHour: '15:00',
                    dateWhen: '2021.11.05',
                },
                "#dot.net#newTech");
        }catch (err) {
            console.log(err.message)
        }
};

module.exports = createEvent;
