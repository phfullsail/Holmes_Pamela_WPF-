// Pamela Holmes - 01/14/2014 - Expressions_Wacky

//I am addicted to this crazy game on my iPad called "Hay Day".  
//The following is what comes from too many days on the farm!

var times = ["8","12","6"];
var field1 = prompt("How many cows are in the field at" + " " + times[0] + " " + "am?");
var field2 = prompt("How many cows are in the field at" + " " + times[1] + " " + "pm?");
var field3 = prompt("How many cows are in the field at" + " " + times[2] + " " + "pm?");
var average = (field1 + field2 + field3)/ 2;

console.log("There is an average of " + average + " cows in the field at any time in through the day.");


