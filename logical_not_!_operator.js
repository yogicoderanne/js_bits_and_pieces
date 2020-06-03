// NOT (!) OPERATOR

//Basic Examples

!null; //true; usually null is a falsy value, but the NOT negates it, thus making it true
!(0 === 0); //false
!(3 <= 4); //false

// Example - written two different ways, get same results

let flavor = 'vanilla';

if (flavor !== 'chocolate' && flavor !== 'coffee') {
	console.log("We don't have that flavor");
}

//other way of writting it

let flavor = 'vanilla';

if (!(flavor === 'chocolate' || flavor === 'coffee')) {
	console.log("We don't have that flavor");
}
