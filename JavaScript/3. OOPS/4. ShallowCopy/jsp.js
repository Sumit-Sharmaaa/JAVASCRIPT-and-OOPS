const person = { name : "Sumit",
    age : 30,
    occupation :"Engineer",
};

const Person2 = person ;

console.log(person);
console.log(Person2);
console.log(Person2.name);
console.log(person.name);
Person2.name = "Sharma"; // same will get copied in parent, as a shallow copy is created and change in copy will result in change in parent
console.log(Person2.name);
console.log(person.name);