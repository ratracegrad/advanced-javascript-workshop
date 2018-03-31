/* 
Array.prototype.includes()

Array.prototype.includes() checks the array for the value passed as an 
argument. It returns true if the array contains the value, otherwise, 
it returns false.

Before, we needed to use Array.prototype.indexOf() to check if the 
given array contains an element or not.

*/

let numbers = [1, 2, 3, 4];

if(numbers.indexOf(2) !== -1) {
  console.log('Array contains value');
}

// With ECMA2016, we can write:

if(numbers.includes(2)) {
  console.log('Array contains value');
}

// CLASSWORK 1
// Will includes() work with string or just numbers?
// create a variable called str that has a sentence
// create a variable called arr that is an array of words from str
let str = 'now is the time for all good men to come to the aid of their country';
let arr = str.split(' ');
if (arr.includes('good')) {
    console.log('works with strings');
}


// CLASSWORK 2
// How does .includes() handle NaN vs indexof()
let nanNumbers = [1, 2, 3, 4, NaN];
console.log('indexOf NaN', nanNumbers.indexOf(NaN)); 
console.log('includes NaN', nanNumbers.includes(NaN)); 