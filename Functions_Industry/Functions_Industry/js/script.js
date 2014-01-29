// Pamela Holmes - 01/27/2014 - Functions Industry


//Ad sales efficiency

var calcRevenue = function(ads,pages,cost) {
	// calc revenue from sales
	var revenue = ads * pages * cost;
	return revenue;
	
};

// invoke the revenue function
var tRev = calcRevenue(5,20,39);

var rMessage = ( tRev > 100 && tRev < 350) ? "The ad sales are doing well!" : "We have maximized our ad sales for this site!";

if (tRev <= 10) {
	// message if any parameters == 0
	console.log("Did you work this week?");
} else if (tRev > 10 && tRev <= 100) {
	// message if sales are still low
	console.log("That's a start, but $" + tRev + " will not pay the bills!!");
} else {
	console.log(rMessage);
}


