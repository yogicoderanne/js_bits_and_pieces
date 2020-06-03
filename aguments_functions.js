//Passing args through functions

//Example 1-function greet(name) {
function greet(name) {
	console.log(`Hello, ${name}`);
}

greet('Anne');
//output will be "Hello, Anne" - or whatever you put in

//Example 2 - Generating a dice roll bw 1 and 6, Can call functions from inside other functions. This time, we are going to pass an arg. - aka a param -through and also use a loop
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls) {
	for (let i = 0; i < numRolls; i++) {
		rollDie();
	}
}
throwDice(3); // WILL RETURN 3 ROLLS
//Rolled: 6
//Rolled: 2
//Rolled: 4
