//Ex 1

let cupcakes = [ 'Plain Chocolate', 'Extra Vanilla', 'Extra Red Velvet', 'Plain Carrot' ];
//find the first cupcake that has the string "plain"in it

const flavor = cupcakes.find((flavor) => {
	return flavor.includes('Plain');
});
//Plain Chocolate; stops after it finds the first match

//Ex 2

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
//find a book that had a rating greater than 4.3

const goodBook = books.find((book) => {
	return book.rating >= 4.3;
});
//Title: "Bone..." rating:4.42
