/* Using const with arrays - const you cannot reassign or give a new value; it cannot be changed (strings)l HOWEVER - with arrays, value can change (even use const) as long as the reference remains the same --- cannot change the reference, but you can change anything inside of the array
*/

// Example 1
const myEggs = [ 'blue', 'brown' ];
//now we add, delete, etc something to it
myEggs.push('pink');
myEggs[1] = 'green';

//not allowed - cannot change the reference, cannot reassign to a new array
myEggs = [ 'red', 'purple' ]; //not allowed; will get uncaught typerror *

//Example 2
const foods = [ 'chicken' ]; //foods will return "chicken"
foods.push(cake); //foods will return "chicken", "cake"
foods.unshift('cheese'); //foods will return "cheese", 'chicken", "cake"
foods.pop(); //foods will return "cheese", "chicken"
//nooo
foods = [ 'grapes' ]; // NOT ALLOWED - cannot change reference type, will get an error
