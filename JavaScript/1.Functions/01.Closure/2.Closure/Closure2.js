let a = 'Global';

function OuterPrint(){
    let b = 'Outer Print';

   return function InnerPrint(){
        let c = 'Inner Print';
        return `${a} -> ${b} -> ${c}`;
    };
}

const show = OuterPrint(); // here show  = innerPrint(), as outerPrint is returning innerPrint() fxn.
console.log(show); // This will return show(), which is basically innerPrint() fxn
const printInner = show(); // printInner will store what's show() i.e. innerPrint Fxn is returning
console.log(printInner); // output : Global -> OuterPrint -> Inner Print


/*
But Here if we see, How's it possible as -

OuterPrint is called in line no-12, and when a function is called and value is returned i.e value comes in
show variable then that fxn gets popped out of Call Stack, then how we are getting value of b or even 
Inner Print Fxn which is inside outer Print Fxn.

So this is due to Concept called Closure in JavaScript.

Closure is a combination of a Function with its Lexical Environment i.e outer environment.
So, basically closure remembers the lexical environmnet of any variable where it existed.


*/



