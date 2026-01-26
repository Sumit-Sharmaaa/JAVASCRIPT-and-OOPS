// Date

const today = new Date();
console.log(today);

const birthDate = new Date("1999-06-12"); // will retuturn the date in words
console.log(birthDate);

// const someDay = new Date(1990, 07); // starts from 0=Jan to 11=Dec, So 07 is August not July
// console.log(someDay);

console.log(birthDate.getFullYear());
console.log(typeof birthDate.getFullYear());
console.log(birthDate.toDateString());

BirthDtStr= birthDate.toString(); // converts into string Date for further computations
console.log(BirthDtStr); 
console.log(BirthDtStr.slice(11,20)); // slice works on string only




