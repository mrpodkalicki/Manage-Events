const  express = require('express');
const  router = express.Router();
const Event   = require('../Classes/Event.class');
const Person  = require('../Classes/Person.class');
const EventModel   = require('../mongooseDB/models/eventForm.model');
const PersonModel  = require('../mongooseDB/models/personForm.model');


const createPersonAndSave = async (personData) =>{
    const {firstName, lastName, email} = personData;
    let result = {};
    try{
        const objInDb =  await Person.checkIfExistInDBAndSave(PersonModel,{"email":email} );
            if(!objInDb){
                const person = new Person(firstName, lastName, email);
                await person.creatPersonSchema(PersonModel)
                    .then(schema => Person.saveToDb(schema))
                    .then(savedObj => {
                        person.idObjInDb = savedObj._id;
                        result = person ;
                        console.log(`save to DB  person${savedObj}`)})
                    .catch(err =>{
                        result = err;
                        return err
                    });
            }else {
                result =  objInDb;
            }
    }catch (err) {
        result = err;
        return err
    }
    return result;
};

const createEventAndSave = async ( eventDate ) => {
    const { title, personId ,dataInformation, tags } = eventDate;
    let  result = {};
    try{
        const objInDb =  await Person.checkIfExistInDBAndSave(EventModel,{
                title :title,
                personId: { $eq:personId},
                tags: tags,
                'dataInformation.startHour' : dataInformation.startHour,
                'dataInformation.endHour' : dataInformation.endHour,
                'dataInformation.dateWhen' : dataInformation.dateWhen,
            } );
        if(!objInDb){
            const event = new Event( title, personId, dataInformation, tags );
            await event.creatEventSchema(EventModel)
                .then(async schema =>  await Event.saveToDb(schema))
                .then(savedObj => {
                    result = savedObj;
                    console.log(`save to DB  Event${savedObj}`)
                }).catch( err => {
                    result = err;
                    return err
                    });
        }else{
            result = false;
        }
    }catch(err){
        console.log(err.message);
        result = err;
        return err
    }
    return result
};
const  createEvent = async ( dataEvent, dataPerson)=> {
    let result = {};
        try{
            await createPersonAndSave(dataPerson)
                .then( async personObject =>  {
                    (personObject._id) ? dataEvent.personId = personObject._id : dataEvent.personId = personObject.idObjInDb;
                     result = await createEventAndSave(dataEvent);
                }).catch(  err => {
                    result = err;
                    return err;
                })
        }catch (err) {
            console.log(err.message);
            result = err;
            return err;
        }
        return result;
};
module.exports = (  () => {
    router.post('/createEvent', async  function (req, res) {
        const {event, person } = req.body;
        try {
            const result = await createEvent(event, person);
            const resIfSaveFalse = {save:false,
                description: "Event with te same title, person, tag  and date exist in DB"};
            const resultIfSaveTrue = {save: true, savedObj: result};
            const resultToSend  = (!result) ? JSON.stringify(  resIfSaveFalse  ): JSON.stringify(  resultIfSaveTrue  )  ;
             await  res.send(resultToSend);
        }
        catch (err){
            await  res.send(err);
        }
    });
    return router
})();




