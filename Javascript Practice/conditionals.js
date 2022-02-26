/*jshint esversion: 6 */

//Basic Conditional Checking
const marks = 67;

if (marks >= 93) {
    console.log("A+");
} else if (marks >= 85) {
    console.log("A");
} else if (marks >= 79) {
    console.log("A-");
} else if (marks >= 74) {
    console.log("B+");
} else if (marks >= 69) {
    console.log("B");
} else if (marks >= 64) {
    console.log("B-");
} else if (marks >= 59) {
    console.log("C");
} else if (marks >= 50) {
    console.log("D");
} else {
    console.log("F");
}