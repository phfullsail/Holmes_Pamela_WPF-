// Pamela Holmes - 01/14/2014 - Expressions_Industry

// Converting page dimensions from inches to pixels

var iWidth = prompt("Let's convert your page dimensions from inches to pixels. \nPlease enter your page width in inches");
var iHeight = prompt("Enter your page height in inches.");
var pixelsPerInch = 150;

var pWidth = iWidth * pixelsPerInch;
var pHeight = iHeight * pixelsPerInch;

var result = "Your page width " + iWidth + "in" + " " + "X" + " " + iHeight + "in" + " " + "is equivalent to " + pWidth + "px " + "X" + " " + pHeight + "px.";

alert(result);

console.log(result); 
