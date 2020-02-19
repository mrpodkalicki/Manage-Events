const  express = require('express');
const  router = express.Router();
const EventModel  = require('../mongooseDB/models/eventForm.model');

const showAllEvents = async () => {
      return  await EventModel.find({},  (err, docs) => {
        try{
           return docs
        }catch(err){
            return err;
        }
    });
};

module.exports = (  () => {
    router.get('/events', async function (req, res) {
        await showAllEvents().then ( respone => res.json(respone) )
    });
    return router
})();