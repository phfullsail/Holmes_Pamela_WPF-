// Pamela Holmes - 01/27/2014 - Arguments & Parameters

calcArea(30, 20);

function calcArea(w, h) {
	var area = w * h;
	console.log(area);
}


function dogYears(age) {//parameters
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}
var age1 = 4;
 dogYears(age1);//arguments
 dogYears(5);
