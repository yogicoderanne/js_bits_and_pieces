/* shift = remove from the start
   unshift = add to the start
*/

// Example 1 - SHIFT
let choresToDo = [ 'Dust', 'Vacum', 'Sweep', 'Mop' ];

choresToDo.shift();
//now the length is returned as 3, and ChoresToDo will now read as "Vacum", "Sweep", "Mop"
choresToDo.shift();
choresToDo.shift();
//now just returns an empty array []

//Example 2 - UNSHIFT

let choresToDo = [ 'Sweep', 'Mop' ];

choresToDo.unshift('Vaccum');
//now the length is returned as 3, and ChoresToDo will now read as "Vaccum", "Sweep", "Mop"

choresToDo.unshift('Dust');
//now the length is returned as 4, and ChoresToDo will now read as "Dust", "Vaccum", "Sweep", "Mop"
