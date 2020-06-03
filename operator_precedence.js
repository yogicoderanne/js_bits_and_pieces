// Example 1

let x = 7;
x == 7 || (x === 3 && x > 10);
//true

// HOWEVER - if written like this: -- it changes, order does matter!

let x = 7;
(x == 7 || x === 3) && x > 10;
//false

//see notes
