// Happy Number
// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, 
// replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// Math.Pow(1,2) + Math.Pow(9,2)  = 82
// Math.Pow(8,2) + Math.Pow(2,2)  = 68
// Math.Pow(6,2) + Math.Pow(8,2)  = 100
// Math.Pow(1,2) + Math.Pow(0,2)  + Math.Pow(0,2) = 1

// https://leetcode.com/problems/happy-number/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let memoization = new Map();
    let base = 10;

    let computeHappyNumber = function (actual) {
        if (memoization.has(actual))
            return false;

        if (actual == 1)
            return true;
        else if (actual <= 0)
            return false;

        let sum = 0,
            original = actual;

        while (original > base - 1) {
            sum += Math.pow(parseInt(original % base), 2);
            original = parseInt(original / base);
        }

        if (original > 0) {
            sum += Math.pow(original, 2)
        }

        if (sum == 1)
            return true;

        memoization.set(actual, sum);

        return computeHappyNumber(sum);
    }

    return computeHappyNumber(n);
};

var isHappy_1 = function (n) {
    if (n == 1)
        return true;

    let memoization = new Map();
    let base = 10;
    let sum = 0;

    while (n > 1) {
        let original = n;
        while (original > base - 1) {
            sum += Math.pow(parseInt(original % base), 2);
            original = parseInt(original / base);
        }

        if(original > 0) 
        {
            sum += Math.pow(parseInt(original % base), 2);
        }

        if (sum == 1)
            return true;
        else {
            if (memoization.has(n)) {
                return false;
            } else {
                memoization.set(n, sum)
            }
            n = sum;
            sum = 0;
        }
    }
}

// console.log(isHappy(19))

console.time('isHappy(50)');
console.log(isHappy(50))
console.timeEnd('isHappy(50)');