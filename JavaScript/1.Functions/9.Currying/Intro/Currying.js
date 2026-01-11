// Currying --> f(a,b,c) => f(a)f(b)f(c)


function add1(a,b,c){
    return a+b+c;
}

// console.log(add1(2,3,4));

function add2(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}

console.log(add1(2)(3)(4));
console.log(add2(2)(3)(4));