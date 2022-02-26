// jshint esversion: 6

//Testing scopes for blocks 
{
    let blockLocal = 5;
    var blockNonLocal = 5;
}

console.log(`Value for blockNonLocal: ${blockNonLocal}`);

//Will not work as let defines variables within a block scope
//console.log(`Value for blockLocal: ${blockLocal}`);

//Testing scopes for functions
let globalVar = 5;

function localFunc() {
    let localVar = 4;
    console.log(`Before calling function, for local variable: ${localVar}`);
    if (localVar > globalVar) {
        globalVar--;
        localVar++;
    } else {
        globalVar++;
        localVar--;
    }
    console.log(`After calling function, for local variable: ${localVar}`);
}

console.log(`Before calling function, for global variable: ${globalVar}`);
localFunc();
console.log(`After calling function, for global variable: ${globalVar}`);

//Will not work as it is not defined in outside scope
//console.log(`For local variable, outside the function: ${localVar}`);

//Nested functions scoping
globalVar = 5;

console.log(`Before calling outer/inner function, for global variable: ${globalVar}`);

function outerfunc() {
    let nonLocalVar = 4;
    console.log(`Before calling outer/inner function, for non-local variable: ${nonLocalVar}`);

    function innerfunc() {
        let localVar = 3;
        console.log(`Before calling inner function, for local variable: ${localVar}`);

        if (localVar > nonLocalVar) {
            localVar++;
            nonLocalVar--;
            globalVar = globalVar + 2;
        } else {
            localVar--;
            nonLocalVar++;
            globalVar = globalVar - 2;
        }

        console.log(`After calling inner function, for local variable: ${localVar}`);
    }
    innerfunc();

    console.log(`After calling inner function, for non-local variable: ${nonLocalVar}`);
    console.log(`After calling inner function, for global variable: ${globalVar}`);

    if (nonLocalVar > globalVar) {
        nonLocalVar--;
        globalVar++;
    } else {
        nonLocalVar++;
        globalVar--;
    }

    console.log(`After calling outer function, for non-local variable: ${nonLocalVar}`);
}

outerfunc();
console.log(`After calling outer function, for global variable: ${globalVar}`);