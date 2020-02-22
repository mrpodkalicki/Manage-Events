class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
    };
     async creatPerson(personModel){
         return  await new personModel({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        });
    };

    async saveToDb(personToSave){
         return personToSave.save()
     }
}

module.exports = Person;