/*
Problem statement
Write a JavaScript function that filters an array of words and returns a new array containing only the words with a length greater than or equal to a specified minimum length. This task will involve using the filter method to implement the logic.



Complete the filterLongWords function that takes two parameters: words (an array of strings) minLength (a number specifying the minimum length of words to be included)
Use the filter method to return a new array containing words that satisfy the condition.
Ensure the function handles cases with no matches, varying minLength values, and empty arrays.
The function should not modify the original array.


Expected Input
words = ["apple", "banana", "kiwi", "grape", "watermelon"];
minLength = 5;
Expected Output
["apple", "banana", "grape", "watermelon"]
*/

const words = ["apple", "banana", "kiwi", "grape", "watermelon","Figs"];
const minLength = 5;

// Function to filter words based on length
function filterLongWords(words, minLength) {
  // Use filter to return words that have a length greater than or equal to minLength
    const wordGreaterThanMinLength = words.filter(findWord);

    function findWord(word) {
        if (word.length >= minLength) {
            return word;
        }
    }
    return wordGreaterThanMinLength;
}

// Test the function
const result = filterLongWords(words, minLength);
console.log(result); // Output: ["apple", "banana", "grape", "watermelon"]
