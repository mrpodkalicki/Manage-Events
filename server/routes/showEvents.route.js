var express = require('express');
var router = express.Router();
const EventModel  = require('../mongooseDB/models/eventForm.model');


const showAllEvents = async () => {
     const response = await EventModel.find({},  (err, docs) => {
        try{
           return docs
        }catch(err){
            return err;
        }
    });
     return response
};


module.exports = (  () => {
    router.get('/events', async function (req, res) {
        await showAllEvents().then ( respone => res.json(respone) )
    });
    return router
})();