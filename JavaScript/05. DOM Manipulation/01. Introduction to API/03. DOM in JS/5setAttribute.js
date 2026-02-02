/* 
****setAttribute Method*****

setAttribute is a method in JavaScript used to modify or set the value of an
attribute for a specified HTML element. It is particularly useful when you want
to dynamically change or add attributes to elements on the page.

Syntax
element.setAttribute(attributeName, attributeValue);

● element: The reference to the HTML element on which you
want to set the attribute.
● attributeName: The name of the attribute you want to modify or
add.
● attributeValue: The value you want to assign to the specified
attribute.




****Modifying Existing Attributes:
You can use setAttribute to modify the value of an existing attribute. 
For example, to change the src attribute of an image element:

html
<img id="myImage" src="image.jpg" alt="My Image">

javascript
const imageElement = document.getElementById('myImage');
imageElement.setAttribute('src', 'new-image.jpg');

Now, the src attribute will be changed to "new-image.jpg".



****Adding New Attributes:

If you want to add a new attribute to an element, setAttribute can be used for
that as well. For instance, you can add a data attribute to a div element:

html
<div id="myDiv">Hello</div>

Javascript
const divElement = document.getElementById('myDiv');
divElement.setAttribute('data-info', 'Some additional info');

This will add a data-info attribute with the value "Some additional info" to the div element.


Special Considerations:
1. When using setAttribute, be mindful of the attribute names and their case
sensitivity. Attribute names are generally case-insensitive in HTML, but it's
recommended to use lowercase for consistency.
2. If an attribute with the given name already exists, setAttribute will update its
value. If it doesn't exist, the method will create a new attribute.
3. For certain attributes like class, style, and onclick, using setAttribute might not
work as expected. It's better to use specific property assignments in those
cases.



********Removal of Attributes:

To remove an attribute from an element, you can set its value to null or use
the removeAttribute method:

Javascript
const myElement = document.getElementById('myElement');

// Remove an attribute using setAttribute
myElement.setAttribute('data-info', null);


setAttribute provides a flexible way to manipulate attributes in the DOM,
making it an essential tool for dynamic web development and interactive user
interfaces. However, it's worth noting that when dealing with simple attributes
like src, href, and others that have corresponding properties, directly setting
the properties (e.g., element.src = 'new-image.jpg') is generally more
straightforward and efficient. */

// ****Adding New Attributes:

const divElement = document.getElementById('myDiv');
divElement.setAttribute('data-info', 'Some additional info'); //not shown in output
console.log(divElement.dataset.info); // it is just to print the data-info attribute

// Modifying existing Attribute

let ModifyDivElement = document.getElementById('myDiv');
ModifyDivElement.setAttribute('data-info', 'Modified Some additional info')
console.log(divElement.dataset.info);

// Remove Attributes - 
const removeElement = document.getElementById('myDiv');
removeElement.setAttribute('data-info', null);
console.log(divElement.dataset.info);

// ModifyDivElement.innerText = ModifyDivElement.innerText + " World";
// console.log(ModifyDivElement.innerText); // will change the onscreen output too along with console output 