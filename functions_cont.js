//1: passwordValidator Function Example
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

//for ref.
// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, username) {
	if (password < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

isValidPassword('roses21!', 'roseslolyeah'); //false
isValidPassword('storms21!', 'Chocolate123'); //true

//can also be written in other ways like:
function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hasSpace || tooSimilar) return false;
	else return true;
}

isValidPassword('roses21!', 'roseslolyeah'); //false
isValidPassword('storms21!', 'Chocolate123'); //true

//2 -
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

//loop over each num, add them together, and then divide by number of nums

let total = 0;
function avg(arr) {
	for (let num of arr) {
		total += num;
	}
	return total / arr.length;
}

avg([ 0, 50 ]); //25

//3
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you ignore string casing (make it so that it works for lower case and upper case)

//loop over every letter in the alpahbet, then check if letters are in the sentence
function isPangram(sentence) {
	for (let char of 'abcdefghijklmonprstuvwxyz') {
		if (sentence.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

isPanagramisPangram('The five boxing wizards jump quickly'); //true
isPangram('The five boxing wizards jump quick'); //false

//same function, but ignorning string casing:

function isPangram(sentence) {
	let lowerCased = sentence.toLowerCase();
	for (let char of 'abcdefghijklmonprstuvwxyz') {
		if (lowerCased.sentence.indexOf(char) === -1) {
			return false;
		}
	}
	return true;
}

//4 -
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object
