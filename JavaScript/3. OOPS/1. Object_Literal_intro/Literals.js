// Object creation in JS

const obj = {};
console.log(obj);

// object constains key value pairs.

const movie = {
    title : "The Avengers",
    year : "2011",
    genre : "Action, Sci-fi",
    cast :  [ "Robert D Jr.", "Chris Evans"],
getDetails : function (){   // function inside object
    return (`Title : ${movie.title} \n  Year : ${movie.year} \n Genre : ${movie.genre} \n Cast : ${movie.cast}`);
},

// function with parameters inside object
getMovieDetails : function(detail){
    // console.log(movie.detail); // undefined, as detail is a variable passed inside function & not a key oj object
    console.log(movie[detail]); // [], correct way to get the varibale passed in function 
}

}

console.log(movie); // will return the complete object
console.log(movie.cast);
console.log(movie.getDetails());

const detail = 'year';
movie.getMovieDetails(detail);

