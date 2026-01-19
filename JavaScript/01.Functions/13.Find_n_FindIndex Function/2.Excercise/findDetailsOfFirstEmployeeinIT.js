// Problem:
// Find the details and position of the first employee in the "IT" department.

// Code:

let employees = [
{ name: "Alice", department: "HR" },
{ name: "Bob", department: "IT" },
{ name: "Charlie", department: "Finance" },
{ name: "David", department: "IT" }
];

let firstITEmployee = employees.find(employee => employee.department === "IT");

let firstITIndex = employees.findIndex(employee => employee.department === "IT");

console.log(firstITEmployee); // Output: { name: 'Bob', department: 'IT'}
console.log(firstITIndex); // Output: 1


// Explanation:
// ● Use find to locate the first employee in the IT department.
// ● Use findIndex to determine the position of the first IT employee