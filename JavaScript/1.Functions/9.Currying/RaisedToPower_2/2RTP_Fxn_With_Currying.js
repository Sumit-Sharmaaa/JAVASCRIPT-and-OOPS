function power(a){
    return function(b){
        return b**a ;
    }
}

const power2 = power(2);
//console.log(power2);  // will return power2 function, so passing any value in it will give square
console.log(power2(3));


const power3 = power(3);
//console.log(power3);  // will return power3 function, so passing any value in it will give cube
console.log(power3(3));

const power4 = power(4);
console.log(power4(3));


// Here basically we are making the first parameter constant for second parameter, i.e. in 1st fxn 2 was constant
// And in 2nd fxn 3 was constant
