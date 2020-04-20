// Search in Rotated Sorted Array
// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// https://leetcode.com/problems/search-in-rotated-sorted-array/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search_1 = function (nums, target) {
    var findRotateIndex = function () {
        let start = 0,
            end = nums.length - 1;

        if (nums[start] < nums[end])
            return 0;

        while (start <= end) {
            let middle = parseInt((start + end) / 2);
            if (nums[middle] > nums[middle + 1])
                return middle + 1;
            else {
                if (nums[middle] < nums[start])
                    end = middle - 1;
                else
                    start = middle + 1;
            }
        }
        return 0;
    }

    var binarySearchByPosition = function (start, end) {

        while (start <= end) {
            let middle = parseInt(start + (end - start) / 2);

            if (target == nums[middle]) {
                return middle;
            } else if (target < nums[middle]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }

        return -1;
    }

    let rotatedIndex = findRotateIndex(nums);

    if (rotatedIndex == 0) {
        return binarySearchByPosition(0, nums.length - 1);
    } else if (rotatedIndex > 0) {
        if (target >= nums[rotatedIndex] && target <= nums[nums.length - 1]) {
            return binarySearchByPosition(rotatedIndex, nums.length - 1);
        } else {
            return binarySearchByPosition(0, rotatedIndex - 1);
        }
    }

    return -1;
};

// Modified Binray Search
var search = function (nums, target) {
    let start = 0,
        end = nums.length - 1;
    while (start <= end) {
        let mid = start + (end - start) / 2;
        if (target == nums[mid])
            return mid;
        else if (nums[start] <= nums[mid]) {
            if (target >= nums[start] && target < nums[mid])
                end = mid - 1;
            else
                start = mid + 1;
        } else {
            if (target <= nums[end] && target > nums[mid])
                start = mid + 1;
            else
                end = mid - 1;
        }
    }
    return -1;
}




console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1
console.log(search([3, 1], 1)) // -1