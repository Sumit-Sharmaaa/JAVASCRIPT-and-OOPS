// Higher Order Function -
// A function which accepts a fxn as Parameter OR a function that returns a function is called HOF.

/* Quest : Write a function to find square root and cube root of Array
Eg -  Array  = [2,3,4,5]
SquaredArray = [4,9,16,25]
Qubic Array  = [8,27,64,125]
*/

/* 1st Way - Redundant Code 

const inputs =[1,2,3,4,5,6,7,8,9,10]

function Square(input){
    const sqaures=[];
    for(let i of input){
        sqaures.push(i*i);
    }
    return sqaures;
}

function Cube(input){
    const cubes=[];
    for(let i of input){
        cubes.push(i*i*i);
    }
    return cubes;
}

console.log(Square(inputs));
console.log(Cube(inputs));
*/

// Here if we see both the above functions we can check that only one calculation line is different rest fxn is same.



// 2nd Way - DRY Way- Don't Repeat Yourself

const inputs =[1,2,3,4,5,6,7,8,9,10]

function operation(input,fxn){
    const newArr=[];
    for(let i of input){
        newArr.push(fxn(i));
    }
    return newArr;
}

function square(num){
    return num*num;
}

function cube(num){
    return num*num*num;
}

console.log(operation(inputs,square));
console.log(operation(inputs,cube));

// So thisabove function is higher order function which is accepting a function and returninf an Array.
