/* Function Expressions (es5): Another syntax of es5 to define functions (see Function Declaration/Statement (es5) above) - both will work the same/give same output (if written correctly)
Remember - functions are objects!!*
Function expression can be stored in a variable, after it has been stored, the variable can be used as a function. It does not have to have a name, but it can. 
*/

//Example:
const sum = function(x, y) {
	return x + y;
};

sum(9, 3); //12
