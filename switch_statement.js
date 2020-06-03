// Example 1

// see video and dl notes; can basically be used in place of long chains of if/if else, else statments --- prefernece thing?

//Example: one using traidtional conditions, second one using switch statments --

// 1).

let day = 2;

if (day === 1) {
	console.log('Monday');
} else if (day === 2) {
	console.log('Tuesday');
} else if (day === 3) {
	console.log('Wednesday');
} else if (day === 4) {
	console.log('Thursday');
} else if (day === 5) {
	console.log('Friday');
} else {
	console.log('Invalid');
}

//Versus: (using switch statment now)

let day = 2;

switch (day) {
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	default:
		console.log('INVALID');
}

// Second example; can have mulitple cases, will continute running until js reads the break then moves on etc

let emoji = 'devil';

switch (emoji) {
	case 'sad face':
	case 'happy face':
		console.log('yellow');
		break;
	case 'devil':
	case 'eggplant':
		console.log('purple');
		break;
	case 'heart':
	case 'lips':
		console.log('red');
		break;
	default:
		console.log('N/A');
}
