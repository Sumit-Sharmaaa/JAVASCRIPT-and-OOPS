// Using Literal as earlier
console.log("Using Literal as earlier"); 

const movieObj = {
    title : "The Avengers",
    year : 2012,
    getDetails(){
        console.log(`Title: ${this.title} \n Year: ${this.year}`);
    },
};

console.log(movieObj);
console.log(movieObj.title);
console.log(movieObj.year);
console.log(movieObj.getDetails());


// Using Factory Function
console.log("Using Factory Function"); 

function movie (title,year){  // Factory Function not constructor
    const movieObject = {
        title: title,
        year: year,
        getDetails(){
            console.log(`Title: ${this.title} \n Year: ${this.year}`);
        },
    };
    return movieObject;
}

const movie1= movie('Terminator', 2016);
console.log(movie1);
movie1.getDetails();
console.log(movie1.title);
console.log(movie1.year);


