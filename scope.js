//SCOPE in JS
/* Scope - Function (local), Global, and Block + Lexical Scoping & Hoisting 

-Scope determines the accessibility of variables, objects, and functions from different parts of the code. (The location where a variable is defined dictates where have access to that variable)

  - Function/Local Scope:  When a variable is defined inside a function, it will be local only for that function and can’t be used outside; otherwise will result in errors. let and const behave the same for this. 
  
  - Block -  Everything inside curly braces { }, if-else cases and loops are block-scoped. This is the part that var doesn’t support (avoid var LOL), but can be used by let and const. 

- Lexical - In a nested group of functions, the inner functions have access to the variables and other resources of their parent scope. This means that the child functions are lexically bound to the execution context of their parents. 

*/
