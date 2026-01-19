
// List of names
const names = ["Alice", "John", "Michael", "Emma", "Sophia", "James"];

// Function 1: Find names
function findNames(names, peopleName) {

    let foundName = names.find((name) => name === peopleName);

    if (foundName === undefined) {
        foundName = "Name not found";
    }

 return foundName; 
}

// Function 2: Find index of a name
function updateNamesIndex(names, peopleName) {

    const findIndexofName = names.findIndex((name) => name === peopleName);

    return findIndexofName;
  
}

// Example Usage:
console.log(findNames(names, "John")); // Output: "John"
console.log(findNames(names, "Andrew")); // Output: "Name not found"

console.log(updateNamesIndex(names, "Emma")); // Output: 3
console.log(updateNamesIndex(names, "Mark")); // Output: -1


