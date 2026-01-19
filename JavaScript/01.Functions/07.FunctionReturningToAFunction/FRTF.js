// In Previous Example we have covered the concept of passing function into a function paramerter 
// In this Example we will see the a function returning a function.

function greet(message){
    // return function wish(wishes){
        return function(wishes){  // can be anonymous fxn as well
        console.log(`${wishes},${message}`);
    };
}

// const greeting = greet("I hope you are doing Well"); //  1st Way
// greeting('Hello');

greet('Welcome to the session')('Hi');  // 2nd Way
