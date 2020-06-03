const nums = [ 54, 2, 8, 69, 21, 45, 90, 66, 43, 20, 75, 25, 18 ];

//filter so that you get a new array, only with odd numbers
const oddNums = nums.filter((n) => {
	return n % 2 === 1;
});

//output when calling oddNums
//[69,21,45,43,75,25]

//do the same, but onl;y for even numbres

const evenNums = nums.filter((n) => {
	return n % 2 === 0;
});
//output when calling evenNums
// [54,2,8,90,66,20,18]

//Example 2 -
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
//filter for books that have a rating greater than 4.3
const highRating = books.filter((b) => {
	return b.rating > 4.3;
});
//output will give books with ratings, etc
//books itself remains unchanged ~

//filter for only fatansy books as the genre

const fantasyBooks = books.filter((b) => {
	return b.genres.includes('fantasy');
});

//filter for short form books: short stories or essays as the genre

const shortFrom = books.filter((b) => {
	return b.genres.includes('short stories') || b.genres.includes('essays');
});

//create option for user to search and then filter for book titles; and make sure its lower-cased

const query = ''; //left empty for the user to input
const results = books.filter((b) => {
	return b.title.toLowerCase().includes(query.toLowerCase());
});
