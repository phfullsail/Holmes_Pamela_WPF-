// Pamela Holmes - 01/27/2014 - Functions Personal


//Miles driven to work each week
var totalMiles = 0; // define total miles 

var milesWeekly = function(numDays, dayMiles) {
	totalMiles = numDays * dayMiles;
	
	return message = ( totalMiles > 200 && totalMiles < 350) ? "Oh my, " + totalMiles + " miles! I hope you drive a Prius!" : "That's not bad," + totalMiles + " miles is average!";
};

var weekMiles = milesWeekly(0,33);

if (totalMiles === 0) {
	// message if any parameters == 0
	console.log("Did you work this week?");
} else if (totalMiles > 350) {
	// too many miles message
	console.log("That's crazy!! You need to find another job, " + totalMiles + " miles is too much!!");
} else {
	console.log(message);
}


