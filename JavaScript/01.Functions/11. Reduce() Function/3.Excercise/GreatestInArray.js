/*
Problem statement:
Write a JavaScript function to find the highest score in an array of student scores. 
This task involves using the reduce method to iterate through the array and determine the maximum score.

Complete the findHighestScore function that takes an array of scores as input.
Use the reduce method to find the highest score in the array.
Ensure your logic handles edge cases, such as arrays with only one element or duplicate highest scores.
Return the highest score as the output.

Expected Input:
[85, 90, 78, 88, 76, 95, 89]
Expected Output:
95
*/
// Define the array of student scores
const scores = [85, 90, 78, 88, 76, 95, 89];

function findHighestScore(scores) {
  // The goal is to find the highest score among the students.
    const highest = scores.reduce(redFunc, 0);

  // Implement your logic below and return the highest score.

    function redFunc(greatest,num) {
        if (num > greatest) {
            greatest = num;
        }
        // console.log(greatest);
        return greatest;
    }
    return highest;
}

console.log(findHighestScore(scores));