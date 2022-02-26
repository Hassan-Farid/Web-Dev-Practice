// jshint esversion: 6

//Defining a simple object with attributes
let person = {
    name: "ABC",
    age: 10,
    email: "abc@xyz.com"
};

//Accessing attributes from the object
console.log(`Person's name: ${person.name}`);
console.log(`Person's age: ${person.age}`);
console.log(`Person's email: ${person.email}`);

//Defining an object with attributes and methods
let cat = {
    gender: 'male',
    color: 'black',
    meow: function() {
        console.log('Meow');
    }
};

//Calling methods for the object
cat.meow();

//Creating a nested object
let student = {
    name: 'John',
    age: 18,
    degree: 'BSCS',
    university: 'EUET',
    department: 'Computer Science',
    email: 'john@gmail.com',
    address: {
        house: 'ABC',
        street: 'XYZ',
        city: 'IJK',
        country: 'USA'
    }
};

//Accessing attributes from the defined student object
console.log(`Student's home street name: ${student.address.street}`);

//Using objects in functions
function getInfo(s) {
    console.log(`Student's  Name: ${s.name}`);
    console.log(`Student's Degree: ${s.degree}`);
    console.log(`Student's University: ${s.university}`);
    console.log(`Student's Department: ${s.department}`);
}

//Using function to get info for created student object
getInfo(student);

//Using functions to create new objects
function createPerson(personName, personAge, personGender) {
    return {
        name: personName,
        age: personAge,
        gender: personGender
    };
}

//Creating new objects via function
person1 = createPerson('XYZ', 29, 'male');
console.log(person1.age);