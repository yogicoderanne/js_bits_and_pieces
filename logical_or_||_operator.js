// OR (||) OPERATOR - if one side is true, the whole thing is true

//Basic Examples:

1 !== 1 || 10 === 10; //true
10 / 2 === 5 || null; //true
0 || undefined; //false

//IRL Example ---

let age = 76;

if (age < 6 || age >= 65) {
	console.log('Seniors or children get free admission');
} else {
	console.log('Admission is $10 please');
}

//Example 2 -- can chain on as many OR's as you want, just like you can with AND ---- NOTE - arrays would be a better method when you have multiple elements or data that you would like to use ;)

let color = 'ocean';

if (color === 'teal' || color === 'torquoise' || color === 'ocean') {
	console.log('Nice choice');
} else {
	console.log('Bad choice');
}
