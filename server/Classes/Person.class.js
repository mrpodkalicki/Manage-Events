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
        await Model.find(criteria, (err, obj) => {
            console.log( obj,'OBJJJ')
            if(obj.length === 0){
                this.IfExistinDB = false;
            }else{
                this.IfExistinDB = true;
                this.idObjInDb = obj[0]._id;
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