/* for loop 
syntax: 
for (
  [ initalExpression]; 
  [condition];
  [incrementExpression]
)

*/
//Example 1
//Here, created inital variable of i and gave it a value of 1 (it starts at 1), then it will keep looping if i is less than or equal to ten (it will stop at ten - this is the condition), and then you're adding 1 to i (the inital value) each time through (each time the loops run), It is logging the word hello and then whatever the value of i is

for (let i = 1; 1 <= 10; i++) {
	console.log('Hello', i);
}
//Hello: 1
//Hello: 2
//Hello: 3 .. and goes like this until is hits 10

//Example 2
//Here, inital variable of i with a value of 50, it will keep looping if i is greater than or equal to 0, and then you're subtracting ten each time through or each iteration. It is logging the value of i

for (let i = 50; i >= 0; i -= 10) {
	console.log(i);
}
//50
//40
//30
//20 ... and goes like this unitl it hits 0

//Example 3
//Print out all even #s b/w 1 and 50;
for (let i = 1; i <= 50; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
//Example 4
//ASCII Art - write code to create an ASCII art triangle; for loops
let dollar = '$';
for (let i = 1; i <= 6; i++) {
	console.log(dollar);
	dollar += '$';
}
/* $
   $$
   $$$
   $$$$
   $$$$$
   $$$$$$ 
   */

//Example 5
