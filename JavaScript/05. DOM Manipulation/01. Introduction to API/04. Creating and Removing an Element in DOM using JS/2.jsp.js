// Creating an Element in DOM using JS

// Now, we can create element by just adding into the html code. 
// for eg if i want to add any button i can do that directly adding into html code and also through Javascript.
// Also when i want that after some activity the button or any element should appear,
//  then in that cases it is must to use JS to add such element afterwards based on the interaction activity.

// To create element in DOM, document.createElement is used.

const btn = document.createElement('button');
btn.textContent = 'Click here'; // text on the button
btn.className = 'btn1';  // To assigning class/id to button

// Still button is not visible because we havent set its place
// Now say i want to add it into div inside body, So for that i need to access div first.

const division = document.querySelector("div");
division.appendChild(btn); // To append the button inside the DOM.
// It will append at the end of div ie. after heading.


// NOW Create a div inside body and add a paragraph inside that second div.

const div2 = document.createElement('div');
div2.className = 'div2';

// To get the body node, for adding p inside it
const division2 = document.querySelector("body");
division2.appendChild(div2);

const paraInsideDiv2 = document.createElement('p');
paraInsideDiv2.textContent = 'This is the Paragraph inside div2';

const division3 = document.querySelector('.div2');
division3.appendChild(paraInsideDiv2);


// To remove and element inside DOM

// document.querySelector('h3').remove();


// Ques :- Which property is used to change the text content of an HTML element?
// Ans : textContent, innerHTML

// Ques : - What is the difference between the append and appendChild methods in DOM manipulation?
// ANs : - Append is the new feature added in the modern browsers . It can accept multiple elements unlicke appendChild,
//  and also in append, the appended element can be anything- element, text or node,
// whereas in appendChild, we can append and element.

