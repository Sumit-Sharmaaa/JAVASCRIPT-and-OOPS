'use strict';

function checkthis(){ 
    console.log(this); // will Return Undefined in strict Mode 
}
checkthis();

// But if we talk about arrow function, it doesn't have its own this it takes this of its surrounding scope
const checkArrow = () => {
    console.log(this);
}
checkArrow(); // Returns the Window Object as it is the Parent.

// This in Objects
const user1 ={                               // User1 Object
    userName:'Sumit',
    userAge : 26,

    work: function(){                       // work function of User1 obj
        console.log(this);
    },
};
user1.work(); // will return the user1Obj

const user2 = {                              //user2 object
    userName: 'Sharma'    
};
user2.work = user1.work;                     // just copying the same function in user2 object

user2.work(); // will return the user2.obj
// So basically, this will return the object from which it gets called. 

/*
Note- Above example of const1 and const2 is irrespective of strict mode on or Off,
      strict mode just matters in first function of this sheet i.e. checkThis() function.
*/




