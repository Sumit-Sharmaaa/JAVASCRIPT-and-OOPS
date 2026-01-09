// IIFE 

(function(){
    console.log('IIFE')
})();

// with arguments

(function(a,b){
    console.log(a**b);
})(4,2);

//IIFE was used mainly before ES6 and introduction of let and const 
//Variables which are declared in IIFE becomes private variables as the function immed. invokes just after declaration
// And once the functionis invoked u caanot get the members out of the function and can be accessed within the function.
// We can only give out something public out of fxn through return statement.

(function(){
    let userData = {
        userName: "john",
    userage : 20,
    }

    function getName(){
        console.log(userData.userName)
    }

function updateAge(age){
    console.log(userData.userage+age);
}

})

