class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.IfExistinDB = false;
        this.idObjInDb = null;
    };
     async creatPerson(personModel){
         return  await new personModel({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        });
    };
    async checkIfExistInDB(Model){
        await Model.find({"email": this.email}, (err, obj) => {
            obj.length === 0 ? this.IfExistinDB = false : this.IfExistinDB = true;
        })
    }
    async saveToDb(personToSave){
        const personObj = await  personToSave.save();
        this.idObjInDb = personObj.id;
        return personObj
     }
}

module.exports = Person;