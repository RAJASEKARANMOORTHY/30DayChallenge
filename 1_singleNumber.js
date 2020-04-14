// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber_1 = function (nums) {
    let length = nums.length;

    if (length == 1)
        return nums[0];
    else if (length == 2)
        return -1;

    nums.sort();
    let index = 0;

    while (index < length - 1) {
        if (nums[index] == nums[index + 1]) {
            index += 1;
        } else if (nums[index + 1] == nums[index + 2]) {
            return nums[index];
        }
        index += 1;
    }

    return index == length - 1 ? nums[length - 1] : -1;
};

// Using Bit Operator
var singleNumber_2 = function (nums) {
    let a = 0;

    for (let num of nums) {
        a ^= num;
    }

    return a;
}


// Using List
var singleNumber_3 = function (nums) {
    let map = new Map();
    let list = [];

    for (let num of nums) {
        let index = list.indexOf(num);
        if (index >= 0) {
            list.splice(index, 1)
        } else {
            list.push(num);
        }
    }
    return list[0];
}

// using Maths
// 2∗(a+b+c)−(a+a+b+b+c)=c
var singleNumber = function (nums) {
    let list = [];
    let sumOfSet = 0; // (a+b+c)
    let sumOfNums = 0; // (a+a+b+b+c)

    for (let num of nums) {
        let index = list.indexOf(num);
        if (index < 0) {
            sumOfSet += num;
            list.push(num);
        }

        sumOfNums += num;
    }

    return 2 * sumOfSet - sumOfNums;
}

// Using Hash Table
var singleNumber_5 = function (nums) {
    let hash = new Map();

    for (let num of nums) {
        if (!hash.has(num)) {
            hash.set(num, true);
        } else {
            hash.delete(num);
        }
    }

    for (let num of nums) {
        if (hash.has(num)) {
            return num;
        }
    }

    return -1;
}
// Non Empty Array
// One is Odd
// Min >= num.length <= Max
// console.log(singleNumber([1]));
// console.log(singleNumber([2, 2, 1]));
// console.log(singleNumber([4, 1, 2, 1, 2]));

console.log(singleNumber([10, 186, -49, 176, 118, 167, -61, 189, 6, -24, 7, -93, 71, 112, 187, 45, -36, 38, 82, 108, -46, 112, 51, 165, -37, 159, 1, -53, 7, 38, 90, 181, -23, 91, -42, 172, -95, 130, 84, 149, -47, 68, 126, -67, 175, 22, 121, 131, 84, 114, 60, 64, 182, -75, -17, -71, 69, -92, 103, -91, -91, 86, 126, 166, 33, -36, -80, -37, 118, -80, -18, 127, 36, -71, -82, -82, 144, 12, 57, 149, 71, 91, -83, -100, -30, 45, 186, 16, -51, -72, -83, 107, 140, -97, -93, 1, 12, 189, -61, -50, 180, 98, 96, -29, 193, 167, 57, -45, 16, 6, -76, 4, 109, -23, 22, 144, 190, -97, 193, -51, -99, -79, -47, 142, 107, 175, 109, 121, 190, 90, 34, 32, 63, -24, 41, -53, 41, 89, 130, -18, -99, 103, 86, 127, -30, 102, 32, -49, 181, -60, 114, 60, -29, 182, -75, 168, 96, 51, 33, 142, 108, 69, 10, -57, 166, 48, 82, 161, -17, -50, 102, 63, -45, 140, 180, 176, -95, 36, -46, 168, 187, 161, -72, -100, -42, 165, -76, -67, 89, 159, 64, 34, 98, 4, -60, 172, -79, 68, 48, 131, -57]))