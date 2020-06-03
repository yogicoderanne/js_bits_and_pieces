//TRUTHY AND FALSY VALUES IN JS

//Example 1 - to put into context; not how it would typically be seen

let book = 'null';

if (book) {
	console.log('TRUTHY');
} else {
	console.log('FALSY');
}
// the number 5 here is a "truthy value", but if you put something like zero, NAN, false, empty strings,undefined - you would get falsy

//Example 2 - ex of it could be seen irl

let loggedInUser = 'Anne';

if (loggedInUser) {
	console.log('You are logged in');
} else {
	console.log('Please log in');
}
// this will return saying you are logged in, but if there is a falsy in there, it will return the other message saying please log in
