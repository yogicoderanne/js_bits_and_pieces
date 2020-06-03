//maps create new arrays;accepts a call back, calls that callback for every item in the array, then builds a new array with those values.
///Map creates a new array by calling your callback function with each element in the original array.

//Example 1
const numbers = [ 20, 21, 22, 23, 24, 25, 26, 27 ];
const words = [ 'asap', 'byob', 'rsvp', 'diy' ];
//create a new array that doubles the org. numbers array
const doubles = numbers.map(function(num) {
	return num * 2;
});
//outputs; call doubles
40;
42;
44;

//Example 2
//decide if the # is even or odd, map into a new array that contains an object for each element; gives number tell if its even or odd using true or false

const numDetail = numbers.map(function(num) {
	return {
		value: num,
		isEven: num % 2 === 0, //if remainder is zero, once you divide by 2, will return true, if not it will return false
	};
});
//outputs; call numDetail
isEven: false;
value: 21;

isEven: true;
value: 22;

//Example 3
//change each string in the array "words"to a different format;make them all caps and seperated by periods
const abbrevs = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
});
//outputs when calling abbrevs
[ 'A.S.A.P', 'B.Y.O.B' ];

//Example 4 - get all the title names from all the books
const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36,
	},
];

const titles = books.map(function(b) {
	return b.title;
});
//outputs when calling titles - will return all titles as written in the original array
