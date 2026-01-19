/*
1. 'This' is hidden parameters of all the functions in JS, which we can't acually see it and is hidden.
2. 'this' is pointer to the object.


*/

console.log(this); // currently flow is in Global Scope, so this will point to the parent Object.Output-Window

var user = 'John';
console.log(window.user); // John
console.log(user); // John - bydefault global object is used
console.log(this.user); //John

// So above three lines are same.

// 3. This will return the Object in which it is being called in

function checkthis(){
    console.log(this);
}

checkthis();// Output: Window (in lossely bound function i.e. not in strict Mode)

// But in strict Mode Scene is different


