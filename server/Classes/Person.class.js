class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.idObjInDb = '';
    };
     async  creatPersonSchema(personModel){
         return  await new personModel({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
        });
    };
    static async saveToDb(schema){
        return await  schema.save();
    };
    static async checkIfExistInDBAndSave(Model ,criteria){
        return   Model.findOne(criteria);

    };
}

module.exports = Person;