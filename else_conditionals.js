// ELSE Conditionals

//Example 1

/* Criteria = 
3 - boss 
2 - average
1 - needs work 
<1 or anything else - bad
*/

let rating = 2;

if (rating === 3) {
	console.log('boss!');
} else if (rating === 2) {
	console.log('average!');
} else if (rating === 1) {
	console.log('needs work!');
} else {
	console.log('bad!');
}

//Example 2

let highScore = 1500;
let userScore = 1200;

if (userScore >= highScore) {
	console.log(`Congrats, you have the new score of ${userScore}`);
} else {
	console.log(`Good game, but your score of ${userScore} did not beat the high score of ${highScore}`);
}
