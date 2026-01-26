/*
Problem statement
Suppose you are building a personal finance application that helps users track their expenses. You want to ensure that the user's financial information is kept private and secure.

Objective:-
Create a class called ExpenseTracker with the following private properties:
1. expenses (an array of objects, each representing an expense with properties: name, amount, date)
2. income (a number representing the user's total income)

The class should have the following private methods:
1. calculateTotalExpenses() - calculate the total expense using the expenses array and returns the total amount. You may use reduce, for loop, or forEach loop to calculate the total amount of expenses.

The class should have the following public methods:
1. addExpense(name, amount, date) - adds a new expense to the expenses array in the form of an object.
2. calculateBalance() - Returns the balance left after subtracting all the expenses from the income.This method should internally use #calculateTotalExpenses to compute the total expenses.
    The balance is calculated as:
    balance = income - totalExpenses;

The class should have a constructor that:
1. Takes the user's income as a parameter.
2. Initializes the private property income with the provided value.
3. Initializes the private property expenses as an empty array.



Expected Input:
const tracker = new ExpenseTracker(5000);
tracker.addExpense("Rent", 1000, "2021-10-01");
tracker.addExpense("Groceries", 500, "2021-10-02");
console.log(tracker.calculateBalance()); 


Expected Output:
3500
*/

//complete the ExpenseTracker class.
// Do not alter the starter code
    class ExpenseTracker {
        // Private proerties
        #expenses;
        #income;
        //constructor function
        constructor(income){
            this.#income = income;
            this.#expenses = [];
        }
        //private method
        #calculateTotalExpense(){
            let sum=0;
            for(let i in this.#expenses){
                sum=sum+this.#expenses[i].amount;
            }
            return sum;
        }
        //public methods
        addExpense(name, amount, date){
            this.#expenses.push({name,amount,date});
        }
        calculateBalance(){
            const totalExpense = this.#calculateTotalExpense();
            const balance = this.#income-totalExpense;
            return console.log(balance);
        }
    }

    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("rent",1200,"25-01-2026");
    tracker.addExpense("food",800,"26-01-2026");
    tracker.addExpense("other",500,"26-01-2026");
    tracker.calculateBalance();
