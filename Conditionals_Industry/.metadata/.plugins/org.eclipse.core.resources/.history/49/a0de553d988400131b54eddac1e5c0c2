// Pamela Holmes - 01/22/2014 - Conditionals Personal


//Determine if the closet is reaching maximum shoe capacity

// Enter the closet size
var cWidth = prompt("Let's determine your closet's maximum shoe capacity.\n What is the width of your closet in feet?");

// Enter closet width
var cLength = prompt("What is the length in feet?");

// Enter number of shoes
var sCount = prompt("How many pairs of shoes do you own?");

//calculate the size of the closet
var cSize = cWidth * cLength;

// calculate how much space the shoes take up - logic = 2 sq ft per shoe
var sSpace = sCount * 2;

// Holder for capacity message
var mCapacity; 

//lets determine if there is room left in the closet
mCapacity = (cSize > sSpace) ? "You still have room left in your closet for more shoes!" : "No more room left, stop buying shoes!";

// send the appropriate message
if (cWidth > 0 && cLength > 0 && sCount > 0) {
	console.log(mCapacity);
} else {
	console.log("All values must be greater than 0 for this calculation to work!");
}

