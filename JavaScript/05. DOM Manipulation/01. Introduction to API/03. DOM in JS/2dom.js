    // To console out
    console.log(document.querySelector("h1")) // To get the first h1 tag
    console.log(document.querySelectorAll("h1")) // To get all the h1 tags
    console.log(document.querySelector(".second")); // using class name
    console.log(document.querySelector("#para")); // using id name

    // For manipulation, store it in a variable so that it can be used.
    const firstHeading = document.querySelector(".first");
    const para = document.querySelector("#para");    

    // Selectors which are specific

    console.log(document.getElementById('para')); // No need of # here
    console.log(document.getElementsByClassName('first')); //  // No need of . here
    console.log(document.getElementsByTagName('h3'));

    // query Selector is Widely used as it can get everything

    // MANIPULATION 

firstHeading.style.color = 'red';
para.style.backgroundColor = 'grey';