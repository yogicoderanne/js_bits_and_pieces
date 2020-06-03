//Example 1

const numbers = [ 20, 21, 22, 23, 24, 25 ];

numbers.forEach(function(num) {
	console.log(num);
});
//outputs:
20;
21;
22;
23;
24;
24;

//or could more w/ it like
numbers.forEach(function(num) {
	console.log(num * 3);
});
//outputs:
60;
63;
66;
69;

//could also have written it like this:
function printTriple(n) {
	console.log(n * 3);
}
numbers.forEach(printTriple);
//outputs:
60;
62;
66;
69;

//Example 2: this is complex array where each item is an objectl; use forEach to print out each title name in upper caps

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

books.forEach(function(book) {
	console.log(book.title.toUpperCase());
});
//outputs - all the title names in uppercase
