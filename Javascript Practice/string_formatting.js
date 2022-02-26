/* jshint esversion: 6 */

//Defining constant values for the names
const fname = "Hassan";
const lname = "Farid";

//Displaying the name using string concatenation
console.log("First Method: My name is " + fname + " " + lname);

//Displaying the name using string templating
console.log(`Second Method: My name is ${fname} ${lname}`);

//Coersion Checking
const numNumeric = 5;
const numString = "5";

//Checks value but not type
console.log(`Are equal in value but not in type: ${numNumeric == numString}`);
console.log(`Are equal in both value and type: ${numNumeric === numString}`);