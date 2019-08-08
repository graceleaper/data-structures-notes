// Factorial (!)

// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6

function factorial(num) {
    if (num === 1) {     // base case
        return num; // !1 is 1
    } else { // recursive case
        return num * factorial(num - 1);
    }
}

console.log(factorial(4));
