//Example 1 - function expression (es5) syntax verus arrow function (es6) syntax -- same function, will do same thing, but written differently

const square = function(x) {
	return x * x;
};
//outputs when calling square then a number
square(4); //16

//versus arrow function - more concise

const square = (x) => {
	return x * x;
};

//Example 2

const isEven = (num) => {
	return num % 2 === 0;
};
//outputs when calling isEven then a number
isEven(4); //true
isEven(49); //false

//Example 3
const greet = () => {
	console.log('HI!');
};

//Example 4
const engineers = [ 'Kevin', 'Anne', 'Nick' ];

const exclaim = () => {
	return 'IS AWESOME!';
};
