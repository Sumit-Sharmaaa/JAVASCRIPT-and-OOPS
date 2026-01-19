
// Object inside Object

const movie2 = {
    title : "The Avengers",
    year : "2011",
    genre : "Action, Sci-fi",
    cast :  { main_lead : "Robert D Jr.", 
              others : "Chris Evans"},
getDetails2 : function (){
    return (`Title : ${movie2.title} \n  Year : ${movie2.year} \n Genre : ${movie2.genre} \n Cast : ${movie2.cast}`);
}

}

console.log(movie2);  
console.log(movie2.cast);
console.log(movie2.cast.main_lead);
console.log(movie2.getDetails2());