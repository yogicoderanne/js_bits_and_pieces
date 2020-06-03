/* push = add to the end
   pop = remove from the end  
*/

// Example 1 - PUSH

let topCities = [ 'Chicago', 'Miami', 'Denver', 'Los Angeles' ];

topCities.push('Boston');
//topCities will now read as "Chicago", "Miami", "Denver", "Los Angeles", "Boston"

//Example 2 - POP

let topCities = [ 'Chicago', 'Miami', 'Denver', 'Los Angeles', 'Boston' ];

topCities.pop('Boston');
//topCities will now read as "Chicago", "Miami", "Denver", "Los Angeles"

//HOWEVER - with pop, you don't need to specify the value you can just leave it empty () and it will pop, or remove the last value from the array --- see below

let topCities = [ 'Chicago', 'Miami', 'Denver', 'Los Angeles', 'Boston' ];

topCities.pop();
//topCities will now read as "Chicago", "Miami", "Denver", "Los Angeles"
