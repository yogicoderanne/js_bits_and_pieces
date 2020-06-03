//JOIN Example

let letters = [ 'e', 'm', 'o', 'r', 'd', 'n', 'i', 'l', 'a', 'p' ];

letters.join();
//"e,m,o,r,d,n,i,l,a,p" --default seperator is a comma, however that can be changes by passing it in the (), so you can add a -, &, etc

//Same example - combining it with something like reverse

let letters = [ 'e', 'm', 'o', 'r', 'd', 'n', 'i', 'l', 'a', 'p' ];

letters.reverse().join('-');
//p-a-l-i-n-d-r-o-m-e"

//REVERSE Example

let letters = [ 'e', 'm', 'o', 'r', 'd', 'n', 'i', 'l', 'a', 'p' ];

letters.reverse();
//["p", "a", "l", "i", "n", "d", "r", "o", "m", "e"]
