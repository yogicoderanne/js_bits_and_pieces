// Example  - we have one array of colors, with a bunch of arrays inside that array - nested - that are pairs of colors

const colors = [ [ 'red', 'crimson' ], [ 'green, olive' ], [ 'blue, navy blue' ], [ 'orange, dark orange' ] ];

//Example -- animals; animals are paired by gender

const animalPairs = [ [ 'doe', 'buck' ], [ 'ewe', 'ram' ], [ 'peahen', 'peacock' ] ];

//accessing info out of arrays - using above ex

animalPairs[2]; //["peahen", "peacock"]
animalPairs[2][0]; //["peahen"]

//updating elements

animalPairs[0][1] = 'stag'; //this will change 'buck' to 'stag'

//Another example - a board game; null represents an empty spot  -- tic tac toe board game; 3 x 3 board

const board = [ [ 'O', null, 'X' ][(null, 'X', 'O')][('X', 'O', null)] ];
