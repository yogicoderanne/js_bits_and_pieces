//Includes Example

let ingredientsBrownies = [ 'chocoalte chips', 'sugar', 'milk', 'flour', 'eggs', 'baking powder', 'vanilla extract' ];

ingredientsBrownies.includes(flour);
//will return 'true'
ingredientsBrownies.includes(water);
//will return 'false'

//IndexOf Example
let ingredientsBrownies = [ 'chocoalte chips', 'sugar', 'milk', 'flour', 'eggs', 'baking powder', 'vanilla extract' ];

ingredientsBrownies.indexOf('sugar');
//will return index of 1

ingredientsBrownies.indexOf('cheese');
// will return index of -1; as we know, -1 indicates that it doesn't exist
