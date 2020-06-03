// Printing to the console is different than returning a statement!  -- IRL, you don’t really log to the console *unless its for debugging or testing, etc
//Return values; capture them in a variable and return or pass them through another function

// :D

//Example
function add(x, y) {
	return x + y;
}

add(4, 5); //9
//assing to variable/capturing
const total = add(4, 5);
total; //9

//Example 2 - function w/loop,conditional,arrays, booleans,returns, etc

function containsBlue(arr) {
	for (let color of arr) {
		if (color === 'blue' || color === 'baby blue') {
			return true;
		}
	}
	return false;
}

containsBlue([ 'blue', 'pink', 'baby blue' ]); //true
containsBlue([ 'dark blue', 'pink', 'red' ]); //false
