1 /* Q: What is the syntax of an if/else statement in JavaScript? */

if (condition) {
    // code to be executed if the condition is true
} else {
    // code to be executed if condition is false
}

/* The "condition" is an expression that is evaluted to either "true" 
or "false". The code inside the curly braces "{}" following the "if" 
keyword will be executed if the "condition" is true, and the code inside 
the curly braces following the "else" keyword will be executed if the condition is false. */




2 /* Q: How do you check for multiple conditions in an if/else statement? */

// Use the "&&" (and) or "||" (or) operator. For ex, to check if a variable "x" is greater than 0 and less than 10: 

if (x > 0 && x < 10) {
    // code to be executed if x is greater than 0 and less than 10
} else {
    // code to be executed if x is not greater than 0 and less than 10
}

// You can also us multiple "if/else if" statements to check for multiple conditions:

if (x > 0 && x < 5) {
    //code to be executed if x is greater than 0 and less than 5
} else if (x >= 5 && x < 10) {
    //code to be executed if x is greater than or equal to 5 and less than 10
} else {
    // code to be executed if x is not greater than 0 and less than 10 
}




3 // Q: How do you nest if/else statements in JavaScript?

/* You can nest if/else statements in JavaScript by placeing on if/else statemnet inside 
another. This allows you to test multiple conditions and execute different code blocks based
on the results of multiple tests. */

if (condition1) {
    // code to be excuted if condition1 is true
    if (condition2) {
        // code to be executed if condition2 is true
    } else {
        // code to be executed if condition2 is false
    }
} else {
    // code to be executed if condition1 is false 
}

/* USE NESTED if/else STATEMENTS SPARINGLY. Too many nesting can make your code difficult
to understand and maintain. You should properly indent your code to make it clear which code blocks
belong to which conditions */





4 // Q: How do you write an if/else statement that checks if a variable is equal to a certain value?


/* To write and if/else statement that checks if a variable is equal to a certain value, you use the 
equality opertator "===" */

let x = 5;
if (x === 5) {
    console.log('x is equal to 5');
} else {
    console.log('x is not equal to 5');
}

/* The if/else statement checks if the value "x" is equal to 5. if condition "x === 5" is true, the message
"x is equal to 5" will be logged to the console. If the condition is false, the message "x is not equal to 5" will be 
logged to the console*/ 





5 // Q: How do you write an if/else statement that checks if a variable is undefined or not?

/* You can use the equality opertor "===" to compare the variable to "undefined" */

let y;
if (y === undefined) {
    console.log('x is undefined');
} else {
    console.log('x is defined');
}

/* The variable "y" is declared but not assigned a value, so its value is "undefined". The if/else statement checks if the value of "y"
is equal to "undefined" using the strict equality operator "===". If the condition "y === undefined" is true, the message "y is undefined"
will be logged to the console. If the condition is false, the message "y is defined" will be logged to the console. */






6 // Q: How do you use the ternary operator to simplify an if/else statement?

let q = 5;
let results = ( q === 5 ) ? 'q is equal to 5' : ' q is not equal to 5';
console.log(results)

// This is equivalent to writing:

let q = 5;
let result;
if (q === 5) {
  result = "q is equal to 5";
} else {
  result = "q is not equal to 5";
}
console.log(result);