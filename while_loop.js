//Example -- using a for loop for a case like this would be better

let num = 0;
while (num < 11) {
	console.log(num);
	num++;
}
//0
//1
//2
//3
//4 .. will keep going until it hits false, which would be up to 10

//Example 2 -- for loop
for (let i = 0; i <= 5; i++) {
	console.log(i);
}

//Recreating the above for loop w/ a while loop - get same result
let j = 0;
while (j <= 5) {
	console.log(j);
	j++;
}
//Example 3 -- from Cole
// Pick a target number we are trying to guess
const target = Math.floor(Math.random() * 10);
// Make initial guess
let guess = Math.floor(Math.random() * 10);

// Continue looping while guess is not the target num
while (guess !== target) {
	console.log(`Target: ${target} Guess: ${guess}`);
	// IMPORTANT!!
	// Update the value of guess each time through the loop
	guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

////Example 4
// Set population limit of aquarium to 10
const popLimit = 10;

// Start off with 0 fish
let fish = 0;

// Initiate while loop to run until fish reaches population limit
while (fish < popLimit) {
	// add one fish for each iteration
	fish++;
	console.log("There's room for " + (popLimit - fish) + ' more fish.');
}
//There's room for 9 more fish
//There's room for 8 more fish
//There's room for 7 more fish... and continures like this unitl 0

//would be better to use a template literal instead of the concatenation but it works fine
