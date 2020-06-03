/* Different ways to acess data in an object - or access object properties 
-- REMEMBER all keys are converted to strings,except for symbols */

// Dot notation; you just a dot (.) and then whatever key-value pair (data) you want
//Example 1
const fitBitData = {
	totalSteps: 35343,
	totalMiles: 342.12,
	avgCalorieBurn: 5442,
	avgSleep: '2:14',
};
fitBitData.avgSleep; //this will return avgSleep info
fitBitData.avgCalorieBurn; //this will return avgCalories info

//Array (square) Brackets Notation
//Example 1
const numbers = {
	100: 'one hundred',
	16: 'sixteen',
	'100 goldfish': 'good snack',
};
numbers[100]; //this will return "one hundred"
numbers['100 goldfish']; //this will return "good snack"
//Example 2
const palette = {
	red: '#eb4d4b',
	yellow: '#f9ca24',
	blue: '#30336b',
};
palette['red']; //#eb4d4b'
//Using a variable and acessing info -using above ex
let mysteryColor = 'blue';
palette[mysteryColor]; //#30336b
