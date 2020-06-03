//Examples

let engineers = [ 'Anne', 'Kevin', 'Nick', 'Katy', 'Jayden' ];

engineers.sort();
// egngineers would return: ["Anne", "Jayden", "Katy", "Kevin", "Nick"]  -- it came back sorted alpahbetically.
//If #'s are used, it get's converted to strings

//Example 2; most programmers will not use the default sort way as above - people will use a compare function  - a function is passed in. -- examples later <3

//Using sort - advanced ~ cont.
/*
Sort (CONT) - Sorts an array and mutates the original array; there is a comparing function for sort
Syntax = arr.sort(compareFunc(a,b))
If compareFunc(a,b) returns less than 0(negative #), it will sort a before b
If compareFunc(a,b) returns 0, it will not sort (does not change the order)
If compareFunc(a,b) returns greater than 0, it will sort b before a
*/

//Examples
//Can use slice alongside sort as sort mutuates the orginal array - so w/slice, using it before sort, it makes a copy of the array, and then you can sort the arrays multiple time - not commonly used but just in case
const prices = [ 400.5, 3000, 99.99, 35.99, 12.0, 9500 ];
//V1 - this sorts the reg. way, will convert # to strings, not useing the compareFunc(a,b) here
const badSort = prices.sort();

//V2- ascending order - using compareFunc(a,b)
const ascSort = prices.sort((a, b) => {
	return a - b;
});
//this will sort the numbers in ascending order, a goes before b [12,35,99,40...]

//V3 - descending order - using compareFunc(a,b)
const descSort = prices.sort((a, b) => {
	return b - a;
});
//this will sort the numbers in descending order, b goes before a [9500,3000,400.5...]

//Example 2

const books = [
	{
		title: 'Good Omens',
		authors: [ 'Terry Pratchett', 'Neil Gaiman' ],
		rating: 4.25,
		genres: [ 'fiction', 'fantasy' ],
	},
	{
		title: 'Changing My Mind',
		authors: [ 'Zadie Smith' ],
		rating: 3.83,
		genres: [ 'nonfiction', 'essays' ],
	},
	{
		title: 'Bone: The Complete Edition',
		authors: [ 'Jeff Smith' ],
		rating: 4.42,
		genres: [ 'fiction', 'graphic novel', 'fantasy' ],
	},
	{
		title: 'American Gods',
		authors: [ 'Neil Gaiman' ],
		rating: 4.11,
		genres: [ 'fiction', 'fantasy' ],
	},
	{
		title: 'A Gentleman in Moscow',
		authors: [ 'Amor Towles' ],
		rating: 4.36,
		genres: [ 'fiction', 'historical fiction' ],
	},
	{
		title: 'The Name of the Wind',
		authors: [ 'Patrick Rothfuss' ],
		rating: 4.54,
		genres: [ 'fiction', 'fantasy' ],
	},
	{
		title: 'The Overstory',
		authors: [ 'Richard Powers' ],
		rating: 4.19,
		genres: [ 'fiction', 'short stories' ],
	},
	{
		title: 'The Way of Kings',
		authors: [ 'Brandon Sanderson' ],
		rating: 4.65,
		genres: [ 'fantasy', 'epic' ],
	},
	{
		title: 'Lord of the flies',
		authors: [ 'William Golding' ],
		rating: 3.67,
		genres: [ 'fiction' ],
	},
];
// Task = Sort books by rating
const rates = books.sort((a, b) => {
	return a.rating - b.rating;
});
