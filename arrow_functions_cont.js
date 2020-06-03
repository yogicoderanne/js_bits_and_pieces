// "Regular" arrow function:
const square = (n) => {
	return n * n;
};
// Implicit Return, on multiple lines using parens - commented out since prettier keeps re-formatting it
// const square = n => (
//   n * n
// );

// Implicit return one-liner:
const square2 = (n) => n * n;

//array: Goal = double every number, and MAP into a new array ~
const nums = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

// ALL THREE VERSIONS GIVE US THE SAME RESULT:
//V1 - function expression(es5)
const doubles1 = nums.map(function(n) {
	return n * 2;
});

//V2 - arrow function
const doubles2 = nums.map((n) => {
	return n * 2;
});

//V3 -implicit return;arrow function
const doubles3 = nums.map((n) => n * 2);

//Other Examples
//V1 - function expression (es5)
const parityList = nums.map(function(n) {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

//V2 - arrow function
const parityList1 = nums.map((n) => {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

//V3 - arrow function using ternary operators
const parityList2 = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));

const parityList3 = nums.map((n) => (n % 2 === 0 ? 'even' : 'odd'));
