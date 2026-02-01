// 1st Way - Using Function Name

const p = document.querySelector('p');
p.addEventListener('click',clickPara1);  // addEventListener takes event and function/call bach function
// just function name is used and it is not called like clickPara(), as doing it will execute it automatically even without clicking once the page loads. 


function clickPara1(){
    console.log("Para is clicked");
}

// 2nd Way - Using Callback Function - It is used when we need to pass some argument in function

const h3 = document.querySelector('h3');
p.addEventListener('click', function (){
    clickPara2("Hello");
});

function clickPara2(name){
    console.log(name + " Para Clicked")
}

//



