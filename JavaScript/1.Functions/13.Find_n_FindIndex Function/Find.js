// Find() tells if a No is prsent in the Array or not, if Present then it returns the no itself otherwise Undefined.
// FindIndex() will return the index of No if present and if not present then it will return -1.

const inputs= [22,13,15,77,10,77,44,55];


//Find()
const find1= inputs.find((num)=> num==77); // will return 77
console.log(find1); 

const find2= inputs.find((num)=> num==23); // will Return Undefined
console.log(find2);

const find3= inputs.find((num)=> num<15); // will return the first instance which is less that 15
console.log(find3); 

//FindIndex()

const findIndex1 = inputs.findIndex((num) => num==77);
console.log(findIndex1);

const findIndex2 = inputs.findIndex((num) => num==0);
console.log(findIndex2);
