let obj = {
    name: "Sumit"
}

console.log(obj);
console.log(obj.name);


// Valid ways to add properties

obj.age = 16;  // Way-1
obj["class"] = 5; // Way-2
obj = {...obj, sec: 'B'}; // way-3

console.log(obj); // will return the object after adding new properties
console.log(obj.age);
console.log(obj.class);
console.log(obj.sec);