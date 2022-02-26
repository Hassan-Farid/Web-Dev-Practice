// jshint esversion: 6

//Creating an array
let arr = [1, 2, 3, 4, 5];

//Accessing elements of the array one by one
for (i = 0; i < arr.length; i++) {
    console.log(`At index ${i}: ${arr[i]}`);
}

//Alternative way of accessing elements of array
arr.forEach(function(element) {
    console.log(element);
});

//Creating array of multiple types
let newArr = ['A', 2, 3.214, true];
console.log(newArr);

//Creating array of objects
let objArr = [{
        name: 'ABC',
        course: 'Data Structures'
    },
    {
        name: 'XYZ',
        course: 'Object Oriented Programming'
    },
    {
        name: 'IJK',
        course: 'Discrete Mathematics'
    }
];

//Accessing only the names for each object in the array
objArr.forEach(function(student) {
    console.log(student.name);
});

//Creating an object of arrays
let arrObj = {
    students: ['ABC', 'XYZ', 'IJK'],
    courses: ['Data Structures', 'Object Oriented Programming', 'Discrete Mathematics']
};

//Accessing student courses pair from the object (different methods)

//Method 1
function getData(obj) {
    for (let key in obj) {
        obj[key].forEach(function(items) {
            console.log(items);
        });
    }
}

getData(arrObj);

//Method 2
function getData(obj) {
    for (let key in Object.keys(obj)) {
        obj[key].forEach(function(items) {
            console.log(items);
        });
    }
}

getData(arrObj);

//Method 2
function getData(obj) {
    for (let [key, val] of Object.entries(obj)) {
        val.forEach(function(items) {
            console.log(items);
        });
    }
}


getData(arrObj);

//Basic array operations

//Pushing (adding to the end)
console.log(`Array before pushing: ${arr}`);
arr.push(6);
console.log(`Array after pushing: ${arr}`);

//Unshifting (adding to the front)
arr.unshift(0);
console.log(`Array after unshifting: ${arr}`);

//Poping (removing from the end)
arr.pop();
console.log(`Array after popping: ${arr}`);

//Shifting (removing from the start)
arr.shift(0);
console.log(`Array after shifting: ${arr}`);