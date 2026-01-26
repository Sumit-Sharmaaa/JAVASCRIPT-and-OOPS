// Deep Copy and Shallow Copy

const user1 = {
    username : 'Sara',
    age : 12,
};


const user2 = user1;
console.log(user1);
console.log(user2);

user2.username = "Harry";
console.log(user2);
console.log(user1);

// When we are changing the username in user2, then user1's username is also chamging why?
// It is happening because when we assign an object like we did in line no9, the content of object
//  doesnt gets copied, it's reference gets copied.
// It happens just in copying of Objects and not in Primitive datatypes

// This thing can be solved using deep copying and shallow copying in JS

console.log("**************************SHALLOW COPY*****************************************");

console.log("______Using Spread Operator________");

const user3 = {
    username : 'Sara',
    age : 12,
};


const user4 = {...user3}; // using spread operator, here all the keys gets copied from one user to other.
console.log(user3);
console.log(user4);

user4.username = "Harry";
console.log(user4);
console.log(user3);

// Using Object.assign
console.log("______Using Object.assign()________");

const user5 = {
    username : 'Sara',
    age : 12,
};

const user6 = Object.assign({},user5); // means all properties of user5 assign into user6
console.log(user5);
console.log(user6);

user6.username = "Harry";
console.log(user6);
console.log(user5);

// In shallow copy(through both ways) the First layer of key-value pairs gets copied to the other object.
// Therefor it fails in case of Object inside object, and when any changes are made inside 2nd layer Object
//  then it gets reflected into both.

// Example
console.log('Drawback of Shallow Copy in Second Layer Copying');

const userSara = {
    username : 'Sara',
    age : 12,
    marks : {
        maths:10,
        eng:20,
    },
};

const userHarry = {...userSara};
userHarry.username = "Harry";
userHarry.marks.maths = 30;

console.log(userSara);
console.log(userHarry);


