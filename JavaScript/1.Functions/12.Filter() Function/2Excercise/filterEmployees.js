// Problem:
// Extract the names of employees earning more than 50,000, sorted alphabetically.
// Code:

let employees = [
{ name: "Alice", salary: 70000 },
{ name: "Bob", salary: 45000 },
{ name: "Charlie", salary: 55000 },
{ name: "David", salary: 60000 }
];

let highEarners = employees
.filter(employee => employee.salary > 50000)
.map(employee => employee.name)
.sort();

console.log(highEarners);
// Output: ['Alice', 'Charlie', 'David']