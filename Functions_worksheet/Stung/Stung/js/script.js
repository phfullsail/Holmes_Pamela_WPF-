// Pamela Holmes - 01/27/2014 - Stung



var calcStings = function (w) {
	var beeStings = 8.666666667; // stings per pound
	var numStings = w * beeStings;
	return numStings;
};


var result = calcStings(110);
console.log("It takes " + result + " bee stings to kill this animal.");

