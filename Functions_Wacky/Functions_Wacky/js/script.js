// Pamela Holmes - 01/27/2014 - Functions Wacky


//Number of cookies needed for the milk

var totalMilk = 0;

function calcMilk(cookieCount) {
	var countMilk = 5.2; // number of cookies per glass of milk
	// 
	totalMilk = Math.round((cookieCount/countMilk),0);	
};

// get total milk needed
calcMilk(5648);
//console.log(totalMilk);

if (totalMilk <= 0) {
	// message if any cookie count zero
	console.log("Are you not having any cookies today?");
} else if (totalMilk > 0 && totalMilk <= 100) {
	
	console.log("Cookie Monster will need " + totalMilk + " glasses of milk for his cookies!!");
} else {
	var message = ( totalMilk < 200) ? "Cookie Monster really has an appetite today!" : "We have to go to the store for more milk!";
	
	console.log(message);
}


