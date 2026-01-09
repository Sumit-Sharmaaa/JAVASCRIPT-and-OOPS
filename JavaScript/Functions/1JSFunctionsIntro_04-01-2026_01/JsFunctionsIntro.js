// function declaration -- 1st way of creaing fnction

function sum(a,b){
    return a+b;
}

const sum1 = sum(4,6);
console.log(sum1);

// function expression - 2nd way of creating a fxn
// Expression is something which return a value 
// same above fxn in expression way -- no need to name it
//Here sum2 is variable name, fxn has no name and this type of fxn is called anonymous fxn
const sum2 = function (a,b) 
{  
 return a+b;
}

console.log(sum2); // This will return the complete function in output not function value
console.log(sum2(4,7));