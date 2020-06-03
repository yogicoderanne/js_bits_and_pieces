//You start at 0 and continue to the last index (length-1).

//Example 1
let desserts = [ 'cookies', 'cakes', 'ice cream', 'brownies' ];

for (let i = 0; i <= desserts.length; i++) {
	console.log(desserts[i]);
}
//cookies
//cakes
//ice cream
//brownies

//Example 2 - Fizzbuzz
//Write a program that prints the numbers from 1 to 100. But for multiples of three print "fizz" instead of the number and for the multiples of fove print "buzz". For numbers which are multiples of both three and five, print "fizzbuzz"
for (let i = 0; i <= 100; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('fizzbuzz');
	} else if (i % 3 === 0) {
		console.log('fizz');
	} else if (i % 5 === 0) {
		console.log('buzz');
	} else {
		console.log(i);
	}
}

//Example 3
const examScores = [ 80, 92, 56, 66 ];
for (let i = 0; i < examScores.length; i++) {
	console.log(i, examScores[i]);
}
//0, 80
//1, 92
//2, 56
//3, 66

//Example 4
const myStudents = [
	{
		firstName: 'Anne',
		grade: 80,
	},
	{
		firstName: 'Katy',
		grade: 92,
	},
	{
		firstName: 'Nick',
		grade: 56,
	},
	{
		firstName: 'James',
		grade: 66,
	},
];
//now we loop over the array
for (let i = 0; i < myStudents.length; i++) {
	let student = myStudents[i];
	console.log(`${student.firstName} scored ${student.grade}`);
}
//Anne scored 80
//Katy scored 92... continues like that
