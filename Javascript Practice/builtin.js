//jshint esversion: 6

//Applying some built in functions from Math object
console.log(Math.round(5.6));
console.log(Math.floor(5.6));
console.log(Math.ceil(5.6));
console.log(Math.pow(4, 2));

//Applying some built in functions from String object
const s = "hEllO wORLd!";

console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.length);
console.log(s.split(''));

//Type Conversion using Builtins
const numInteger = 5;
const numString = "5";

console.log(`Adding two numStrings: ${numString + numString}`);
console.log(`Adding two numIntegers: ${numInteger + numInteger}`);
console.log(`Adding numInteger and numString: ${numInteger + numString}`); //Treats numInteger as a string
console.log(`Adding numInteger and numString (casted to Integer): ${numInteger + parseInt(numString)}`); //Treats numString as an integer