//Ways of Passing function in JS


// 1st Way

const movie = {
    getDetails: function(){
        console.log(`Title : ${movie.title}`);
    }
}

// 2nd Way

const movie1 = {
    getDetails(){
        console.log(`Title : ${movie.title}`);
    }
}

// 3rd Way

const movie2 = { getMovieDetails(detail)
    {
        console.log(movie[detail]);
    }
}