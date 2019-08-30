/********* charCodeAt() ********/

/* 
    In JS, every character ('a', 'b', 'c', '?', '!', etc.)
    has a special unicode value, which is simply a number.
    Can access unicode using charCodeAt() method
*/

// charCodeAt() takes in an index number that correponds to character in string
console.log('hello world'.charCodeAt(1)); // at index 1, letter "e" has a unicode of 101
console.log('hello world'.charCodeAt(4)); // at index 4, letter "o" has a unicode of 111

// turn any letter/character into a unique numerical value