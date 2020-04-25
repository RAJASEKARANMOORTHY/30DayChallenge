// Bitwise AND of Numbers Range
// Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

// Example 1:

// Input: [5,7]
// Output: 4
// Example 2:

// Input: [0,1]
// Output: 0

// Bit Shift
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd_BitShift = function (m, n) {

    let shift = 0;
    // find the common 1-bits
    while (m < n) {
        console.log(`m = ${m} Binaries = ${m.toString(2)}`);
        console.log(`n = ${n} Binaries =  ${n.toString(2)}`);
        m >>= 1;
        n >>= 1;
        ++shift;
    }
    return m << shift;
};


// Bit Shift
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function (m, n) {
    while (m < n) {
        // turn off rightmost 1-bit
        n = n & (n - 1);
    }
    return m & n;
}

console.log(rangeBitwiseAnd(9, 12));
// console.log(rangeBitwiseAnd(5, 4));

// console.log(rangeBitwiseAnd(5, 7)) // 4
// console.log(rangeBitwiseAnd(0, 1)) // 0