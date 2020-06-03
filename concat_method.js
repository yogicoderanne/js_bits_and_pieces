//CONCAT - merge arrays

// Example

let veggies = [ 'brocoli', 'spinach', 'avocado' ];
let fruits = [ 'bananas', 'apples', 'grapes' ];

console.log(veggies.concat(fruits));
//console.log will return ["brocoli", "spinach", "avocado", "bananas", "apples", "grapes"]
//or
let healthyFoods = veggies.concat(fruits);
//healthyFoods will return ["brocoli", "spinach", "avocado", "bananas", "apples", "grapes"]

//Example 2 -- can merge as many as you want

let veggies = [ 'brocoli', 'spinach', 'avocado' ];
let fruits = [ 'bananas', 'apples', 'grapes' ];
let meats = [ 'chicken', 'steak', 'fake meat' ];
let deserts = [ 'ice cream', 'pudding', 'cake' ];

let foodGroups = veggies.concat(fruits, meats, deserts);
//foodGroups will return ["brocoli", "spinach", "avocado", "bananas", "apples", "grapes", "chicken", "steak", "fake meat", "ice cream", "pudding", "cake"]
