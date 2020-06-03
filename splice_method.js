/* Syntax
splice(startIdx, deleteCount, itemsToInsert;)
*/

//Example

let animals = [ 'dogs', 'cats', 'turtles', 'penguins', 'panthers', 'shark' ];

animals.splice(1, 0, 'birds');
//animals will now return ["dogs", "birds", "birds", "cats", "turtles", "penguins", "panthers", "shark"]

//Example 2

let animals = [ 'dogs', 'cats', 'turtles', 'penguins', 'panthers', 'shark' ];

animals.splice(3, 2);
//animals will now return ["dogs", "cats", "turtles", "shark"]
