// Conditional - Else If

var kidHeight = 48;
var minHeight = 48;
var wParentHeight = 45; // the height of the kid with parent

//if the child is old enough print to the console "you can ride!"
//if kid over 48 inches in height
if(kidHeight > minHeight) {
	//you can ride!
	console.log("You can ride the coaster!");
}else if (kidHeight > wParentHeight){
	//you can ride if a parent present
	console.log("You can ride but only with a parent present.");
}else {
	//sorry you have growing to do
	console.log("Sorry kid, you've got some growing to do first!");
}





