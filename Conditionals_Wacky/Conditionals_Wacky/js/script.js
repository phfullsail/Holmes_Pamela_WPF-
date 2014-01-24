// Pamela Holmes - 01/22/2014 - Conditionals Wacky


//What size car does the clowns need?

//how many clowns will ride
var clownCount = prompt("Let's calculate the type of vehicle needed.\n How many clowns are going on the trip?");
//How long is the trip
var distance = prompt("How many miles will the clowns be traveling?");



//lets determine if there is room left in the closet
laughingGas = ( distance < 20) ? "This is too much fun, I can't stop laughing!!" : "Are we there yet?";

// Select smaller vehicles sizes for more clowns
if (clownCount <= 3){
	console.log("You need a suv! How about an Expedition?\n" + laughingGas);
} else if (clownCount > 4 && clownCount <= 10){
	console.log("You need a sedan! How about a Civic?\n" + laughingGas);
} else {
	console.log("You need Fiat!\n" + laughingGas);
}
