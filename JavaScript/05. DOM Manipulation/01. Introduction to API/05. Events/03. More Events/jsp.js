// Mouse Over Event

// const p = document.querySelector('p');
// p.addEventListener('mouseover',MouseOver);


// function MouseOver(){
//     p.style.backgroundColor='yellow';
//     console.log('Yellow color applid to para after hovering over it');
// }


// MouseDown - works like click only.

// const p1 = document.querySelector('h3');
// p1.addEventListener('mousedown',MouseDown);


// function MouseDown(){
//     p1.style.backgroundColor='yellow';
//     console.log('Yellow color applid to para after hovering over it');
// }

// Task - Clicking on Heading should turn heading yellow and after releasing mouseclick para should turn normal 

const p = document.querySelector('p');
p.addEventListener('mousedown',MouseDown);
p.addEventListener('mouseup',MouseUp);

function MouseDown(){
    p.style.backgroundColor='yellow';
}

function MouseUp(){
    p.style.backgroundColor='';
}


// KEYBOARD EVENTS 
// lets have and event on complete document
// To have an event on document u can addEventListener on either document or on Document.body same thing as html body is only visible on screen
//Keypressed Event

//document.body.addEventListener('keydown',() => console.log('key pressed'));

// This will console out that key has been pressed.


// If u want to know which key has been pressed then u can pass event in a parameter.
document.body.addEventListener('keydown',(a) => {
    console.log('key pressed');
    console.log(a.type); // will give the type of event like - keydown
    console.log(a.key); // will give the key which is pressed
    console.log(a.keyCode);
});


