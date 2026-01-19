// IIFE 

(function(){
    console.log('IIFE')
})();

// with arguments

(function(a,b){
    console.log(a**b);
})(4,2);

//IIFE was used mainly before ES6 and introduction of let and const 
// IIFE should be enclosed in paranthesis(), and another paranthesis is used after the function to call that fxn.
//Variables which are declared in IIFE becomes private variables as the function immed. invokes just after declaration
// And once the function is invoked u caanot get the members out of the function and it can be accessed within the function.
// We can only give out something public out of fxn through return statement - Refer Below Eg


const User = (function(){   // user will store function.
    let userData = {  // object
        userName: "john",
    userage : 20,
    }

    function getName(){   // Nested function
        console.log(userData.userName)
    }

function updateAge(age){
    console.log(userData.userage+age);
}

return {getName:getName, updateAge:updateAge}; // Key-value pair
// In above line since key and value is written as Same so it can also be written as below
// return {getName,updateAge};

})();

console.log(User);  // Should return complete function
console.log(User.userdata);  // undefined- as it is private and not returned by IIFE to be accessed outside.
console.log(User.userName); // undefined- as it is private and not returned by IIFE to be accessed outside.
User.getName(); // John
User.updateAge(3); // 23

/* So it works like Abstraction, there's no way to access the variables outside but we can 
access them through function which can be returned so that it can be used outside IIFE.
*/



