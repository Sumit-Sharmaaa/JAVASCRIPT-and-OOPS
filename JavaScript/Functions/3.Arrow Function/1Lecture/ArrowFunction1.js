// function expression
/*
As seen earlier in function expression we are ommiting function name (anonymous)as compared to 
normal way of fxn declaration, but in Arrow function we can ommit function keyword return keyword also.
*/ 

var sum2 = function(a,b){
    return a+b;
};

 console.log(sum2(2,3));

// ARROW FUNCTION - More compact way | Arrow sign replaces the function keyword
// Pass arguments in paranthesis which is optional , when no arguments leave paranthesis empty.
// Curly{} brackets are used after arrow sign.
var prod = (num1,num2) => {
    return num1*num2;
}

console.log(prod(2,3));

// when there are multiple line of code then curly braces are reqd, if single line then not reqd.
// if single return vlaue statement then return keyword can also be skipped.

// So above same function can also be written as -

var prod1 = (num1,num2) => num1*num2; // compacted way in just one line

console.log(prod1(3,4));


