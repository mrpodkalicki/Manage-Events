class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.IfExistinDB = false;
        this.idObjInDb = {};
    };
     async  creatPerson(personModel){
         return  await new personModel({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
        });
    };
    async checkIfExistInDB(Model, criteria){
        await Model.findOne(criteria, (err, obj) => {
            if(!obj){
                this.IfExistinDB = false;
            }else{
                this.IfExistinDB = true;
                this.idObjInDb = obj._id;
            }
        });
    };
    async saveToDb(schema){
        const obj = await  schema.save();
        this.idObjInDb = obj._id;
        return obj;
     };
}

module.exports = Person;