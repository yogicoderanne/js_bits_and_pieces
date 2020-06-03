let subreddits = [ 'JS', 'React', 'Software Development', 'VSC' ];
// regular foor loop

for (let i = 0; i < subreddits.length; i++) {
	console.log(subreddits[i]);
}
//JS
//React...

//for... of loop  -- same results; for..of loop cleaner,etc
for (let sub of subreddits) {
	console.log(sub);
}
//JS
//React ...
