// Filter() function will filterout and gives a copy of Array according to provided condition.
// filter function accepts a function as a parameter.

const inputs = [4,10,2,-3,-2,5,9,-1];

const positives = inputs.filter(noNegative);

function noNegative(num){
    // if(num>0){
    //     return num;
    // }

    // OR

    return num>0; 
}
console.log('Original Array - {' +inputs + '}');
console.log('Positive Array - {' +positives + '}');


// Write similar Using Compact Arrow function to filter Negative No's

const Negatives = inputs.filter((num) => num<0 );
console.log(inputs);
console.log(Negatives);