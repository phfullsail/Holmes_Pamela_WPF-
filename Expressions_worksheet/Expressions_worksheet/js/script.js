// Pamela Holmes - 01/13/2014 - Expressions_Worksheet

//Dog Years
var sparkyHumanAge = 5;
var dogYears = 7;

var sparkyDogAge = sparkyHumanAge * dogYears;

console.log("Sparky is" + " " + sparkyHumanAge + " " + "human years old which is"  + " " + sparkyDogAge + " " + "in dog years.");



// Slice of Pie part 1
var countSlices = 8;
var countPeople = 12;
var countPizzas = 6;

var totalPersonSlices = countSlices * countPizzas / countPeople;

console.log("Each person ate" + " " + totalPersonSlices + " " + "slices of pizza at the party.");



//Slice of Pie part II
var totalSlices = countSlices * countPizzas;
var sparkySlices = totalSlices % countPeople;

console.log("Sparky got" + " " + sparkySlices + " " + "slices of pizza.");



//Average shopping bill
var totals = [35,45,50,38,53];
var totalSpent = totals[0] + totals[1] + totals[2] + totals[3] + totals[4];
var avgWeekly = totalSpent/5;

console.log("You have spent a total of" + " " + "$" + totalSpent + " " + "on groceries over 5 weeks. That is an average of" + " " + "$" + avgWeekly + " " +  "per week");


//Discounts
var price = 20;
var discountPercent = 10;
var item = "book";
var salesTax = 2;
var discountPrice = price - (price * (discountPercent/100));
var withTax = discountPrice + (discountPrice * (salesTax/100));

console.log("Your" + " " + item + " " + "was originally" + " " + "$" + price +  " " + ", but after a" + " " +  
discountPercent + "%" + " " + "discount, it is now" + " " +  "$" +  discountPrice + " " + ", and" + " " + "$" + withTax + " " + "with tax.");








