//When you use a function as a Parameter to pass inside a function that is called a callback Function.

function greet(wish) // Here wish if a function which I am passing as a parameter
{
    console.log(`${wish()}, Welcome to the JavaScript Course`);
    
} 
function sayHi(){
    return 'Hi!';
}

function sayHello(){
    return 'Hello!';
}

function GoodMorning(){
    return 'GoodMorning!';
}

greet(sayHi);
greet(sayHello);
greet(GoodMorning)

