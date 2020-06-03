//**Note -- es5 vs es6; with es6 there is the intoduction of arrow functions, which allows you to write a shorter syntax, and changes the way that 'this' keyword is used/binds verus how its used in es5 syntax for functions *

//Here, we will go over es5 functions,and later on es6 arrow functions, as well as things like forEach, Map and other aoolications to functions

//Example 1
//define function, and then it must be executed - 2 parts
function greet() {
	console.log('Hello Beautiful');
}

greet();
//output will be "Hello Beautiful"

//Example 2 - passing an input thru; an arg
function greet(name) {
	console.log(`Hello, ${name}`);
}

greet('Anne');
//output will be "Hello, Anne"

//Example 3 - Generating a dice roll; a # from 1 to 6
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

rollDie();
//Rolled: 3
//Rolled: 5

//Ex 4 - Can call functions from inside other functions
function rollDie() {
	let roll = Math.floor(Math.random() * 6) + 1;
	console.log(`Rolled: ${roll}`);
}

function throwDice() {
	rollDie();
}

throwDice();
//Rolled: 4
