// Pamela Holmes - 01/19/2014 - Conditional Worksheet

//Stuff Your  Face I
//if weight if greater than 250lbs entrant qualifies for the heavyweight division

var eWeight = 200;
var rWeight = 250;

if(eWeight >= rWeight) {
	console.log("The competitor qualifies for the heavyweight division.");
}else {
	console.log("The competitor needs to gain some weight!");
}



//Last Chance for Gas!
var nextGas = 200;
var fuelEfficiency = 25;
var currentGas = .5;
var tankSize = 12;
var gallons = tankSize * currentGas;

var tilEmpty = gallons * fuelEfficiency;

if(tilEmpty > nextGas) {
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have" + " " + gallons + " " + "gallons of gas in your tank, better get gas now while you can!"); 
}


//Grade Letter Calculator
var pGrade = 85;

var lGrade ;


if(pGrade <= 100 && pGrade > 89 ){
	lGrade = "A";
}else if(pGrade <= 89 && pGrade > 79 ){
	lGrade = "B";
}else if(pGrade <= 79 && pGrade > 69 ){
	lGrade = "C";
}else if(pGrade <= 69 && pGrade > 59 ){
	lGrade = "D";
}else {
	lGrade = "F";
}

console.log("You have a" + " " + pGrade + "%," + " " +  "which means you have earned a(n)" + " " +  lGrade + " " +  "in the class!");


//Tire Pressure I

var tPressure = [22,24,30,30];

(tPressure[0] === tPressure[1] && tPressure[2] === tPressure[3]) ? console.log("The tires pass spec!") : console.log("Get your tires checked out!");

