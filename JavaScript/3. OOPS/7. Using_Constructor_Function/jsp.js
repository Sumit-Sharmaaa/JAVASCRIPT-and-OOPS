// Constructor function name should start with Capital letter.
// No need of object creation, just simply assign values to proerties
// No return statement

function Movie(title, year){
    this.title=title;
    this.year=year;
    this.getDetails = function() {
        console.log(`Title: ${this.title} \n Year: ${this.year}`);
    };
}
// New keyword is used to invoke the constructor

const movie1 = new Movie("Avatar", 2013);
console.log(movie1);
console.log(movie1.title);
console.log(movie1.year);
movie1.getDetails();