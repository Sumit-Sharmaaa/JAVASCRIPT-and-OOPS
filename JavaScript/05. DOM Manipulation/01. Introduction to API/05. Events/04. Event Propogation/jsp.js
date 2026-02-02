// Event Propogation
// Bubbling

// Say if i have 3 div's inside the body , wherein we have outer div, inner div, and then Inner Heading, 
// DOCUMENT --> BODY --> OUTER DIV --> INNER DIV --> INNER HEADING [Hierarchy]
// Now if i write a click Event on all aboves then when i click on InnerHeading then event for it as 
// well as all outer divs of it will be called i.e. - innerHeading + innerDiv + OuterDiv + Body(document only)
// Say if i click on OuterDiv then, Outer+Body will be called.
// This behaviour is called Bubbling, as it is bubbling out and not going in.

document
    .querySelector('h3')
    .addEventListener('click',() => console.log('InnerHeading Clicked'));

document
    .querySelector('#innerDiv')
    .addEventListener('click',() => console.log('Inner Div Clicked'));

document
    .getElementsByTagName('div')[0]
    .addEventListener('click', ()=> console.log("OuterDiv Clicked"));

document.body
    .addEventListener('click', ()=> console.log("Body Clicked"));

// Here the Output will come in Order inner to Outer , But if i want the reverse order even clicking to innerHeading only.
//  i.e. Outer to inner then i can make use of capture which is 3rd argument of EventListener Function.
// add capture=true event to Super Parent node, then parent will come first rest order will not change
// and if i add capture=true to OuterDiv then it will come after SUper Parent.
/* 
document
    .querySelector('h3')
    .addEventListener('click',() => console.log('InnerHeading Clicked')); // 3

document
    .querySelector('#innerDiv')
    .addEventListener('click',() => console.log('Inner Div Clicked')); // 4

document
    .getElementsByTagName('div')[0]
    .addEventListener('click', ()=> console.log("OuterDiv Clicked"),true); // 2

document.body
    .addEventListener('click', ()=> console.log("Body Clicked"),true);  // 1 

 */


// And if i dont want to stop propagate, ie. after clicking on Inner Heading only InnerHeading click function should get called.
// for this pass parameter(say event) in  InnerHeading function and use parameter.stopPropagation();
// So, now if i click on InnerHEading only its function gets called, 
// but progation will happen if i click on innerDIv or outer div as I have not stopped for them.

/*
document
    .querySelector('h3')
    .addEventListener('click',(event) => {
        event.stopPropagation();
        console.log('InnerHeading Clicked')
    }); 
    

document
    .querySelector('#innerDiv')
    .addEventListener('click',() => console.log('Inner Div Clicked')); 

document
    .getElementsByTagName('div')[0]
    .addEventListener('click', ()=> console.log("OuterDiv Clicked")); 

document.body
    .addEventListener('click', ()=> console.log("Body Clicked")); 
    
    */


// Here also progation will happen if i use true in addEventListener,
//  as it will first call Super parent then other true member and then InnerHeading

