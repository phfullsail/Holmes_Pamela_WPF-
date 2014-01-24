// Pamela Holmes - 01/22/2014 - Conditionals Industry


//Determine if the project will meet it's deadline

// Enter the total estimated hours
var estimatedHours = prompt("Will the project be finished in time?.\n How many hours are estimated for the project?");

// days remaining
var dDays = prompt("How many development days remaining?");

// number of developers
var dCount = prompt("How many developers are working on the project?");

// calculate development hours per 9 hour work day
var dHours = dCount * 9 ;

// total development hours in the time remaining
var totalHours = dDays * dHours;

// calculate hours remaining
var remaining = estimatedHours - totalHours;

//lets determine if there is room left in the closet
deadlineMessage = ( remaining <= 0) ? "Yay, we will make the deadline!" : "We can't make this deadline. We may need to hire more developers!";

// send the appropriate message
if (estimatedHours != 0 && dDays != 0 && dCount != 0) {
	console.log(deadlineMessage);
} else {
	console.log("Enter valid data in order to accurately scope this project.");
}

