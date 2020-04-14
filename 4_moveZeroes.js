// Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums == null || nums.length == 0 || nums.length == 1) {
        return nums;
    }
    let iteration = 0;
    // console.log(`Input : ${nums.join(',')}`);

    for (let zeroIndex = 0, index = 0; index < nums.length; index++) {
        if (nums[index] != 0) {
            let temp = nums[index];
            nums[index] = nums[zeroIndex];
            nums[zeroIndex] = temp;
            zeroIndex++;
            iteration += 1;
        }
    }

    // console.log(`Output : ${nums.join(',')}, Length : ${nums.length} Iteration :${iteration}`);
}

moveZeroes([0, 0, 1, 3, 12]);
moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([1, 0, 0, 3, 12]);
moveZeroes([1, 0, 1]);