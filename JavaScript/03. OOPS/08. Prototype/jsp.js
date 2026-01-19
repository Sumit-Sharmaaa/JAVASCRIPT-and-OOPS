function Movie(title){
    this.title = title;
}

const movie1 = new Movie ('The Avengers');
movie1.year = 2012;
console.log(movie1);

const movie2 = new Movie('Avatar');
console.log(movie2);
console.log(movie2.__proto__);
console.log(movie1.__proto__);

// The Prototype of both movie1 & movie2 is constructor function - Movie(title)
// Movie2 cannot access Year, as it is private property of Movie1.
// But, prototype is also an object so , what is the prototype of it? 

console.log(movie2.__proto__.__proto__);


/* HIERARCHY

                      OBJECT
                        |
                      MOVIE
                ________|____________
               |                     |
            MOVIE1                 MOVIE2
*/