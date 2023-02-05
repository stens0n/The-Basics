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




4