// Jump Game
// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.

// https://leetcode.com/problems/jump-game/submissions/
// https://leetcode.com/problems/jump-game-iii/
//https://leetcode.com/problems/jump-game-ii/

/** Back Tracking
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump_Back_Tracking = function (nums) {
    let lastIndex = nums.length - 1;

    var canJumpFromPosition = function (position) {
        if (position == lastIndex) {
            return true;
        }

        let jumpTill = Math.min(position + nums[position], lastIndex);
        for (let jumpTo = jumpTill; jumpTo > position; jumpTo--) {
            if (canJumpFromPosition(jumpTo)) {
                return true;
            }
        }

        return false;
    }

    return canJumpFromPosition(0);
};

/** Dynamic Programming - Optimized Back Tracking - Top Down Approach
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump_Top_Down = function (nums) {
    let lastIndex = nums.length - 1;
    let State = {
        Good: 'Good',
        Bad: 'Bad',
        Unknown: 'Unknown'
    };

    let memoizationIndex = Array(nums.length).fill(State.Unknown);
    memoizationIndex[lastIndex] = State.Good;

    var canJumpFromPosition = function (position) {
        if (memoizationIndex[position] != State.Unknown) {
            return memoizationIndex[position] == State.Good;
        }

        let jumpTill = Math.min(position + nums[position], lastIndex);
        for (let jumpTo = jumpTill; jumpTo > position; jumpTo--) {
            if (canJumpFromPosition(jumpTo)) {
                memoizationIndex[jumpTo] == State.Good;
                return true;
            }
        }
        memoizationIndex[position] == State.Bad;
        return false;
    }

    return canJumpFromPosition(0);
}


/** Dynamic Programming - Optimized Back Tracking - Bottom Up Approach
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump_Bottom_Up = function (nums) {
    let lastIndex = nums.length - 1;
    let State = {
        Good: 'Good',
        Bad: 'Bad',
        Unknown: 'Unknown'
    };

    let memoizationIndex = Array(nums.length).fill(State.Unknown);
    memoizationIndex[lastIndex] = State.Good;

    for (let backward = lastIndex - 1; backward >= 0; backward--) {
        let jumpTill = Math.min(backward + nums[backward], lastIndex);
        for (let forward = backward + 1; forward <= jumpTill; forward++) {
            if (memoizationIndex[forward] == State.Good) {
                memoizationIndex[backward] = State.Good;
                break;
            }
        }
    }

    return memoizationIndex[0] == State.Good;
}

/** Dynamic Programming - Greedy
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let lastIndex = nums.length - 1;
    for (let backward = nums.length - 1; backward >= 0; backward--) {
        if (backward + nums[backward] >= lastIndex) {
            lastIndex = backward;
        }
    }
    return lastIndex == 0;
}


console.log(canJump([2, 3, 1, 1, 4]))
console.log(canJump([3, 2, 1, 0, 4]))
console.log(canJump([1]))
console.log(canJump([2, 0]))
console.log(canJump([2, 0, 0]))
console.log(canJump([2, 5, 0, 0]))