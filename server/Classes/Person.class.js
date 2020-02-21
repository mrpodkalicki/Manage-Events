class Person {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
    };
    creatEvent(EventModel){
        return new EventModel({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        });
    };
}

module.exports.Person = Person;