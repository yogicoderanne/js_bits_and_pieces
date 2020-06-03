//Example 1 -  a gameboard
//Find the sum of all the values by using a nested loop
//the first loop will iterate over the outer array; outer loop
//the second loop will then iterate over the inner array; inner loop

const gameBoard = [ [ 4, 32, 8, 4 ], [ 64, 8, 32, 2 ], [ 8, 32, 16, 4 ], [ 2, 8, 4, 2 ] ];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++) {
	let row = gameBoard[i];
	for (let j = 0; j < row.length; j++) {
		totalScore += row[j];
	}
}
//totalScore = 230

//Example 2 -
