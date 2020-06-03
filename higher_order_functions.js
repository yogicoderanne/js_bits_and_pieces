/* HIgher Order Functions: Can store a function in a variable, but you can also store them in other things, like an array, and object, and more and then do things like loop through, and return the function(s), etc. 
When you add a function to an object, you create a method. A method is a property containing a function definition. 
*/

//Example 1
function add(x, y) {
	return x + y;
}

const subtract = function(x, y) {
	return x - y;
};

function multiply(x, y) {
	return x * y;
}

const divide = function(x, y) {
	return x / y;
};

//We can store functions in an array!
const operations = [ add, subtract, multiply, divide ];

//Loop over all the functions in operations
for (let func of operations) {
	let result = func(30, 5); //execute func!
	console.log(result);
}

//Another Ex:
// We can also store functions in objects!
const thing = {
	doSomething: multiply,
};
thing.doSomething(4, 5); //20
