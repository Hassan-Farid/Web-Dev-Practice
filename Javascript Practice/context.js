// jshint esversion: 6

//Using context to change attribute values for an object
let person = {
    name: "",

    getname: function() {
        return this.name;
    },

    setname: function(name) {
        this.name = name;
    }
};

//Using defined object to retrieve and assign names
let newPerson = person;
newPerson.setname("ABC");
console.log(newPerson.getname());


//Alternate way of using context is to use functions sepeartely which use objects as arguments
person = {
    name: ''
};

function getName(person) {
    return person.name;
}

function setName(person, newName) {
    person.name = newName;
}

newPerson = person;
setName(newPerson, "ABC");
console.log(getName(newPerson));