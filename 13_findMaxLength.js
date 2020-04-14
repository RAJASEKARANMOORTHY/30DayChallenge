// 525. Contiguous Array

// Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.

// Example 1:
// Input: [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
// Example 2:
// Input: [0,1,0]
// Output: 2
// Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
// Note: The length of the given binary array will not exceed 50,000.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
    let hash = new Map();
    hash.set(0, -1);

    let maxLength = 0,
        count = 0;
    for (let index = 0; index < nums.length; index++) {
        count += (nums[index] == 1 ? 1 : -1);
        console.log(`Count :${count}, MaxLength :${maxLength}`);
        if (hash.has(count)) {
            maxLength = Math.max(maxLength, index - hash.get(count));
        } else {
            hash.set(count, index);
        }
    }

    return maxLength;
};

var converToNumber = function (nums) {
    let total = 0;

    for (let index = 0; index < nums.length; index++) {
        total = 2 * total + nums[index];
    }
    return total;
}

// console.log(findMaxLength([0, 1]));
// console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 1, 0, 1, 0, 1,0]));