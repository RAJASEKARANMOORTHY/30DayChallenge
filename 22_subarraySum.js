// Subarray Sum Equals K
// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example 1:
// Input:nums = [1,1,1], k = 2
// Output: 2
// Note:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].


// Using Cumulative Sum
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum_Cumulative_Sum = function (nums, k) {
    let count = 0;
    let sum = Array(nums.length + 1);
    sum[0] = 0;
    for (let i = 1; i <= nums.length; i++)
        sum[i] = sum[i - 1] + nums[i - 1];

    for (let start = 0; start < nums.length; start++) {
        for (let end = start + 1; end <= nums.length; end++) {
            if (sum[end] - sum[start] == k)
                count++;
        }
    }
    return count;
};

// Without Space (o(n2))
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum_Without_Space = function (nums, k) {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
        let sum = 0;
        for (let end = start; end < nums.length; end++) {
            sum += nums[end];
            if (sum == k)
                count++;
        }
    }
    return count;
};

// Without Space (o(n2))
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0,
        sum = 0;

    let map = new Map();
    map.set(0, 1);


    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        let difference = sum - k
        if (map.has(difference))
            count += map.get(difference);

        let sumDefault = map.has(sum) ? map.get(sum) : 0;
        map.set(sum, sumDefault + 1);
    }

    return count;
};

// console.log(subarraySum([1, 1, 1], 2))
// console.log(subarraySum([1, 2, 3], 3))
// console.log(subarraySum([1], 0))
console.log(subarraySum([-1, -1, 1], 0))