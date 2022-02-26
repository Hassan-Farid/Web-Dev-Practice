// jshint esversion: 6

//Basic function with no return no parameters
function printHello() {
    console.log("Hello World!");
}

//Calling the function
printHello();

//Creating function with a single parameter but no return
function displayName(name) {
    console.log(`Your name is ${name}`);
}

//Calling the function with name as argument
displayName("XYZ");

//Calling function from a variable 
let func = function(num1, num2) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

func(2, 4);

//Can pass function to a new variable
let newfunc = displayName;
newfunc("ABC");

//Creating a function with return type but no parameters
let returnHello = function() {
    return `Hello World`;
};

//Calling the function directly as well as calling using a variable
console.log(returnHello());
let hello = returnHello();
console.log(hello);

//Creating a function with return type and parameters
let returnAdd = function(num1, num2) {
    return num1 + num2;
};

//Calling the function to get the required answer
const num1 = 4;
const num2 = 5;
let result = returnAdd(num1, num2);
console.log(`Addition of ${num1} and ${num2} gives ${result}`);