//callbacks are functions that are executed after another function has finished executing.
//anonymous functions - func. w/o a name

//EXAMPLE 1 -

setTimeout(function() {
	alert('You are beautiful');
}, 5000);

//or

// setTimeout(callback, delay)
setTimeout(function() {
	//we pass an anonymous callback function
	alert('WELCOME!');
}, 5000);

//outputs:
//browser; 5 seconds then alert pops up repeating whatever is in the alert part of the function

//EXAMPLE 2 - code that runs when you click on a button in the browser; DOM Manipulation and callbacks
const btn = document.querySelector('button');
// JUST FOCUS ON THE CALLBACK WE PASS IN!
btn.addEventListener('click', function() {
	alert('WHY DID YOU CLICK ME!!??');
});
