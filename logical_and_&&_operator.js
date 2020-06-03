//Basic Examples

1 <= 4 && 'a' === 'a'; //true
'abc'.length === 3 && 1 + 1 === 4; //false
true && true; //true
false && false; //false

/* Realistc Example  -- here we take nesting - which is fine and gives same results - but use this logical AND operator - to make it even more efficent, cleaner code, however it gives less specific details then you can do with nesting, etc - again, will achieve same results
*/

//Nesting (nesting conditionals) - in this example: in order to get a valid password, it had to have a length of 6 or more, and no spaces, but if those failed, you would get one of the error messages.

let password = 'pitbulls';

if (password.length >= 6) {
	if (password.indexOf(' ') !== -1) {
		console.log('Password cannot include spaces');
	} else {
		console.log('Valid Password');
	}
} else {
	console.log('Password is too short');
}

//Same example - but using AND (&&) Operator - the first line is only true if both sides are true; password.length is greater than or requal to six and password.indexis space and equal to -1 (having no spaces) - same as above, just written differently

let password = 'pitbulls';

if (password.length >= 6 && password.indexOf(' ') === -1) {
	console.log('Valid Password');
} else {
	console.log('Invalid Password');
}

//Example 2

let num = 3;

if (num >= 1 && num <= 10) {
	console.log('Number is between 1 and 10');
} else {
	console.log('Please guess a number between 1 and 10');
}

// const count = null   -- lol inside joke--

// Lm = [ S² × (g2 − g1) ] / 864 ∀ S<Lm
// Lm = 2S - [ 864 / (g2 − g1) ] ∀ S>Lm
