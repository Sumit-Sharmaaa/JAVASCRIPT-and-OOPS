// Deep copy in JS

// Deep copy is done by one way only.
// It is done using JSON.stringify and JSON.parse

// JSON.stringify - It converts the Json Object to String.
// JSON.parse - It converts the Json String to JSON Object.
 
//Now using both we can do deep copy.

console.log("-----------CASE1 : Simple object , without any method or expression or date.-------");

const user1 = {
    username : 'Sara',
    age : '12',
    marks : {
        maths : 20,
        eng : 30,
    },
};

const user2 = JSON.stringify(user1);
const user3 = JSON.parse(user2);
// OR 
// const user2 = JSON.parse(JSON.stringify(user1));

console.log(user2);
console.log(user3);

user3.marks.maths = 25;
console.log(user3); //  maths marks is 25

console.log(user1); //maths marks is 20


console.log("------------------CASE2 :  Object , with any method or expression or date.-------------------");
// JSON cannot have methods so they can't be copied. and so others like expression or date.

const user4 = {
    username : 'Sara',
    age : '12',
    marks : {
        maths : 20,
        eng : 30,
    },
    getMarks(){
        console.log(this.marks);
    }
};


const user5 = JSON.parse(JSON.stringify(user1));

console.log(user4);
console.log(user5); // doesn't have getMarks() function

// SO COMPLETE DEEP COPY IS NOT POSIBLE JUST USING JS FUNCTIONS.


