// Pamela Holmes - 01/14/2014 - Expressions_Wacky

//I am addicted to this crazy game on my iPad called "Hay Day".  
//The following is what comes from too many days on the farm!

var fieldCount = prompt("Let\'s figure out how many harvests you have before your silo reaches capacity.\nHow many fields do you have?");
var siloSize = prompt("How big is your silo? \nOnly enter increments of 50 got accurate results");

var fieldYield = 2;
var used = fieldCount * fieldYield;
var harvests = Math.round(siloSize/used,2);



var result = "You have " + harvests + " " + "harvests" + " " + "before your silo reaches capacity.";
alert(result);


