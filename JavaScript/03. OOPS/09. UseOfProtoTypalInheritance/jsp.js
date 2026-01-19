// Non prototypal Way

function Movie(title)
{
    this.title=title;
    this.getDetails=function(){
        console.log(`Title: ${this.title}`);
    };
}

// In this way of creating in constructor itself it gets copied to every object and takes more time and space

function Movie1(title){
    this.title=title;
}

Movie1.prototype.getDetails = function(){
    console.log(`Title: ${this.title}`);
};
Movie1.prototype.year = 2012;

const movie1= new Movie('Avengers');
movie1.getDetails();
console.log(movie1.title);

const movie2 = new Movie1('Avatar');
movie2.getDetails();
console.log(movie2.title);


