// Pamela Holmes - 01/14/2014 - Expressions_Personal

// Let's calculate the interest that you are paying on your car

var loanAmount = prompt("Let's figure out how much that new car is really costing you. \nPlease enter your loan amount");
var interestRate = prompt("Enter your interest rate");
var loanLength = prompt("Please enter the loan term in months");

var interestPaid = loanAmount * (interestRate/100) * loanLength;

var result = alert("You will pay "+ "$"+ interestPaid + " " + " in interest if you go the full term of the loan.");

console.log(interestPaid); 
