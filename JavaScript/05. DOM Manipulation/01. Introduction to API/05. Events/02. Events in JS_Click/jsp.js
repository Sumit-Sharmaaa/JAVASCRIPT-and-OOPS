
// 1st Way - Using Function Name

const p = document.querySelector('p');
p.addEventListener('click',clickPara1);  // addEventListener takes 3 arguments - event, function/callback function, capture(not mandatory) in arguments.
// just function name is used and it is not called like clickPara(), as doing it will execute it automatically even without clicking once the page loads. 


function clickPara1(){
    console.log("Para is clicked");
}

// 2nd Way - Using Callback Function - It is used when we need to pass some argument in function

const h3 = document.querySelector('h3');
h3.addEventListener('click', function (){ // can create an arrow function here only
    clickPara2("Sumit");
});

function clickPara2(name){
    console.log(name + " Para Clicked")
}



// Task :- Create button. Click on the button and remove the heading


const btn = document.createElement('button');
btn.textContent = 'Click here'; // text on the button
btn.className = 'btn1';  // To assigning class/id to button

// Still button is not visible because we havent set its place
// Now say i want to add it into div inside body, So for that i need to access div first.

const division = document.querySelector("div");
division.appendChild(btn); // To append the button inside the DOM.
// It will append at the end of div ie. after heading.


// To remove heading after clicking button

const removeBtn = document.querySelector('button');
removeBtn.addEventListener('click',ButtonClicked);


function ButtonClicked(){
    document.querySelector('h3').remove();
    console.log('After Clicking button, Innerheading removed')
}




