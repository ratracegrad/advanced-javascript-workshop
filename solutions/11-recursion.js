/*
Recursion
*/

function iterative(num) {
    let result = 1;
    let count;
    for (count = num; count > 1; count--) {
        result *= count;
    }
    return result;
}
console.log('iterative', iterative(4));


// rewriting the above function using recursion
function factorial(num) {
    // TERMINATION
    if (num < 0) {
        return;
    }

    // BASE
    if (num === 0) {
        return 1;
    }

    // RECURSION
    return num * factorial(num - 1);
}
console.log('recursion', factorial(4));

// Classwork 1
// Write a recursive fibonacci function
function fibonacci(num) {
    // you code goes here
    if (num < 1) {
        return 0;
    }

    if (num <= 2) {
        return 1;
    }

    return fibonacci(num-1) + fibonacci(num-2);
}
console.log('fibonacci', fibonacci(7));

// Classwork 2
// Write a recrusive palindrom function
function isPalindrome(str) {

}
console.log('isPalindrome', isPalindrome('abccba'));
console.log('isPalindrome', isPalindrome('abccdba'));