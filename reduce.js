//Using basic operations w/ reduce
/* [].reduce((accumulator, currentValue) =>{
Return accumulator + currentValue;
}); 
*/

//using sum
const nums = [ 3, 5, 7, 9, 11 ];
const summation = nums.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
});

//Callback // accum.    currentVal    returnVal
//1            3           5            8
//2            8           7           15
//3           15           9           24
//4           24           11         35

//Final Return Value: 35

//using divisions
const nums = [ 3, 4, 5, 6, 7 ];
// To multiply all values in nums:
const product = nums.reduce((total, currentVal) => {
	return total * currentVal;
});

// total    currentVal    returnVal
// 3             4           12
// 12            5           60
// 60            6           360
// 360           7           2520

//Final Return Value: 2520

//Advanced usage of Reduce -
//Find the max
const grades = [ 87, 64, 96, 92, 88, 99, 73, 70, 64 ];
const maxGrade = grades.reduce((max, currVal) => {
	if (currVal > max) return currVal;
	return max;
});

// max     currVal    return
// 87        64         87
// 87        96         96
// 96        92         96
/// etc.

//Cole;s -- Initial Value usage Reduce
// We can specify an initial value as the 2nd argument to reduce:
// arr.reduce(reducerFunction, initialValue)
const total = [ 10, 20, 30, 40, 50 ].reduce((sum, currVal) => {
	return sum + currVal;
}, 1000); //sum starts at 1000, then each element is added to it

//Tallying/Grouping usage of Reduce
//tally the votes

const votes = [ 'y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y' ];

// To tally the votes:
// const results = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {})

// The shorter version:
const results = votes.reduce((tally, val) => {
	tally[val] = (tally[val] || 0) + 1;
	return tally;
}, {});

//Grouping by object using Reduce
//Example
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
		title: 'A Truly Horrible Book',
		authors: [ 'Xavier Time' ],
		rating: 2.18,
		genres: [ 'fiction', 'garbage' ],
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
// To group books by rating:
const groupedByRatings = books.reduce((groupedBooks, book) => {
	const key = Math.floor(book.rating);
	if (!groupedBooks[key]) groupedBooks[key] = [];
	groupedBooks[key].push(book);
	return groupedBooks;
}, {});
//This will return arrays that are grouped by ratings ~
