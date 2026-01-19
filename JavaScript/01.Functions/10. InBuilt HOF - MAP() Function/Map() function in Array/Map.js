// Map() - Map function allows us to go through each element of Copied Array and Manipulates the value
// of it without changing the value in Original Array.
// Map function returns us the manipulated Array byDefault,so need of taking  steps of taking 
// empty array and iterate with for of loop.


 const inputs  = [2,4,6,8,7];

// map function takes a function as a parameter -  inputs.map(fn)
// so one can define the fxn somewhere else and mention the fxn name in paranthesis of map function or one
// can define the anonymous function inside the paranthesis only.

// Map function takes 3 parameters 
// 1st parameter is the current Element of the Array - MANDATORY 
// 2nd parameter is the Index No - OPTIONAL
// 3rd parameter is the Array of the Element -OPTIONAL (RARELY USED) 
// Eg: Array.map(function(cuurrentElement, index, arr)){}

const squaredArray = inputs.map(function(currentElement){
    return currentElement*currentElement;
});

console.log(squaredArray);
console.log(inputs);


// Compacted version using Arrow Function

const squaredArray2 = inputs.map((currentElement) => currentElement*currentElement);
console.log(squaredArray2);
