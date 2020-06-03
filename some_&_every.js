//both boolean methods

//EVERY
//Example 1
const colors = [ 'blue', 'black', 'grey', 'maroon' ];
//check if every element has a length of 3 or not
const lengthColor = colors.every((color) => {
	return color.length === 3;
});
//output when calling lengthColor: false

//Example 2
//check if every elemt ends with the same letter, "e"
const sameEnding = colors.every((word) => {
	return word[length - 1] === 'g';
});
//or can be written like:
const sameEnding = words.every((word) => {
	const last = word.length - 1;
	return word[last] === 'g';
});

//outputs will return false for both ways

//SOME
//Example 1
const colors = [ 'blue', 'black', 'grey', 'maroon' ];
//check if any element has a length of 4 or not
const lengthColor = colors.some((color) => {
	return color.length === 4;
});
//output will return: true as three words are length of 4

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
//Task: Check if every book (all books) are at a 3.5 rating or higher
const highRating = books.every((book) => {
	return book.rating > 3.5;
});

//Task: Check if any books have 2 authors (do some books have 2 authors)
const multipleAuthors = books.some((book) => {
	return book.authors.length === 2;
});
