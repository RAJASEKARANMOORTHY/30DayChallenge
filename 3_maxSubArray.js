// https://leetcode.com/problems/maximum-subarray/

// 53. - Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_1 = function (nums) {
    if (nums.length == 1)
        return nums[0];

    let max = nums[0],
        sum = 0;

    for (let num of nums) {
        sum += num;
        max = Math.max(sum, max);

        if (sum < 0) {
            sum = 0;
        }
    }

    return max;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_2 = function (nums) {
    let length = nums.length,
        currentSum = nums[0],
        maxSum = nums[0];

    for (let index = 1; index < length; index++) {
        currentSum = Math.max(nums[index], nums[index] + currentSum);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}

// Dynamic Programming (Kadane's algorithm)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_3 = function (nums) {
    let length = nums.length,
        maxSum = nums[0];

    for (let index = 1; index < length; index++) {
        console.log(nums.join(','));
        if (nums[index - 1] > 0)
            nums[index] += nums[index - 1];

        maxSum = MathSum = Math.max(nums[index], maxSum);
    }

    return maxSum;
}

// console.log(maxSubArray_4([-2, -1]))
// console.log(maxSubArray_4([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
// console.log(maxSubArray_4([1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4]))
// console.log(maxSubArray_2([1]))
console.log(maxSubArray_1([-1, -4, 3, 5]))