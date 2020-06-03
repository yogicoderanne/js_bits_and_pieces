//Arrays - unpacked based off of position/the index
//Example  - we want to add values to a variable for specific elemnts in the array; add 3 different medals for the first 3 racers:
const raceResults = [
	'Eliud Kipchoge',
	'Feyisa Lelisa',
	'Galen Rupp',
	'Ghirmay Ghebreslassie',
	'Alphonce Simbu',
	'Jared Ward',
];

//could do it the only way of referenceing index and saving it to a variable like so:
// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]

//Now using destructuring:
const [ gold, bronze, silver ] = raceResults;
//Results: calling raceResults would remain unchanged and you would get the same array back
//However, calling the first three medals, would result in the first three names being returned

//If you add commas, you can skip specific elements or use 'rest' as well to collect remaining
const [ first, , , fourth ] = raceResults;
first; //'Eliud Kipchoge'
fourth; //'Ghirmay Ghebreslassie'

const [ winner, ...others ] = raceResults;
winner; //'Eliud Kipchoge'
others; //["Feyisa Lelisa", "Galen Rupp", "Ghirmay Ghebreslassie", "Alphonce Simbu", "Jared Ward"]

//Objects - unpacked based off of the name of the property
//Example
const runner = {
	first: 'Eliud',
	last: 'Kipchoge',
	country: 'Kenya',
	title: 'Elder of the Order of the Golden Heart of Kenya',
};

//Create variables for first and last
const { first, last } = runner;
//Results; first would be set to Eliud, and last would be set to Kipchoge, and Runner (the object) would remain unchanged

//can add variables and set them
const { country: nation, title: honorific } = runner;
//use the 'rest' operator here as well
const { first, last, ...other } = runner;

// Nested Destructuring can work too:

const results = [
	{
		first: 'Eliud',
		last: 'Kipchoge',
		country: 'Kenya',
	},
	{
		first: 'Feyisa',
		last: 'Lilesa',
		country: 'Ethiopia',
	},
	{
		first: 'Galen',
		last: 'Rupp',
		country: 'United States',
	},
];
// NESTED DESTRUCTURING
const [ { first: goldWinner }, { country } ] = results;
goldWinner; //"Eliud"
country; //"Ethiopia"
