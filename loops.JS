1 // Q: What is a loop in JavaScript and why is it useful?

/*
A loop in JS is a control structure that allows you to repeatedly execute a block of code until a certain condition is met. Loops are
useful for performing repetitive tasks, such a processing arrays, generating sequences of numbers, or performing some action a specified 
number of times. By using Loops, you can automate the process of repeating a task, avoiding the need to write the same code multiple times. 
This makes your code more efficient, readable, and maintainable.
*/




2 // Q: What are the different components of a for loop?

/* 
There are three components of a for loop: initialization, condition, and increment.

Initialization: 

The initialization component is executed only once, at the beginning of the loop. It is used to
set up the initial value of a counter variable that will be used to control the loop.

Condition:

The condition component is evaluated before each iteration of the loop. If the condition is true, the
code withing the loop will be executed. If the condition is false, the loop will terminate.


Increment:

The increment component is executed afeter each iteration of the loop. It is used to increment the value of the counter
variable, which is then tested against the condition in the next iteration.

*/

for (initialization; condition; increment) {
    //code to be executed
}