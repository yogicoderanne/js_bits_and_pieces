const student = {
	firstName: 'Anne',
	lastName: 'King',
	strengths: [ 'JS', 'Yoga' ],
	exams: {
		midterm: 92,
		final: 88,
	},
};

//add midterm and final, divide by 2 (find the average)
const avg = (student.exams.midterm + student.exams.final) / 2; //90

//acess yoga
student.strengths[1]; //"yoga"

//Example 2; A game board with info

const game = {
	player1: {
		username: 'Munchkin',
		playingAs: 'X',
	},
	player2: {
		username: 'Muffin',
		playingAs: 'O',
	},
	board: [ [ null, 'X', 'O' ], [ 'X', null, 'O' ], [ 'O', 'X', null ] ],
};
