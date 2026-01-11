/*    REDUCE FUNCTION

1. Reduce Function is used to accumulate the Result For eg - Sum or Product of all the elements in the Array.

2. Syntax - reduce(reducefunction, initial value), where reduceFunction is Mandatory and should be as below:

3. Function reduceFunction(accumulator,currentValue,currentIndex, Array)-accumulator & currentvalue is Mandatory.

4. Accumulator holds the final result. For Eg:When calculating the sum of all the nos in Array, So initially
  acuumulator will hold the initial value i.e. if initial value is 0 , then initially accumulator is 0.
  If initial value is not passed (optional).So in first go Accumulator will hold the current Value & whatever will be added as Next values.

*/

// Question: Find out the Sum of all the No's in the Array using Reduce function

 const inputs = [2,3,4,5,6,7];



 const sum = inputs.reduce(reduceFunc,0);      // const sum will store the returned value of reduce Function. 

 function reduceFunc(total,num){ // Index is optional -- Can be used where we need index in computation or output
  return total+num;
 }

 console.log(sum);

 // Compact Way

 const sum2 = inputs.reduce((total,num) =>{  // define function there itself as an anonymous fxn(Arrow)
  return total+num;
 },0);

console.log(sum2);