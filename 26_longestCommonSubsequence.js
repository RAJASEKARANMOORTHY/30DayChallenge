// Given two strings text1 and text2, return the length of their longest common subsequence.

// A subsequence of a string is a new string generated from the original string with some characters(can be none) 
//deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). 
//A common subsequence of two strings is a subsequence that is common to both strings.

// If there is no common subsequence, return 0.

// Example 1:

// Input: text1 = "abcde", text2 = "ace" 
// Output: 3  
// Explanation: The longest common subsequence is "ace" and its length is 3.
// Example 2:

// Input: text1 = "abc", text2 = "abc"
// Output: 3
// Explanation: The longest common subsequence is "abc" and its length is 3.
// Example 3:

// Input: text1 = "abc", text2 = "def"
// Output: 0
// Explanation: There is no such common subsequence, so the result is 0.


// Constraints:

// 1 <= text1.length <= 1000
// 1 <= text2.length <= 1000
// The input strings consist of lowercase English characters only.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    let memoization = Array(text1.length).fill(0).map(itm => Array(text2.length).fill(-1));
    let lengthText1 = text1.length,
        lengthText2 = text2.length;

    let search = function (position1, position2) {
        if (position1 < 0 || position2 < 0 || position1 >= lengthText1 || position2 >= lengthText2) {
            return 0;
        } else if (memoization[position1][position2] != -1) {
            return memoization[position1][position2];
        }

        let answer = 0;
        if (text1[position1] == text2[position2]) {
            answer = 1 + search(position1 + 1, position2 + 1);
        } else {
            let option1 = search(position1 + 1, position2);
            let option2 = search(position1, position2 + 1);

            answer = Math.max(option1, option2);
        }

        memoization[position1][position2] = answer;

        return memoization[position1][position2];
    }

    return search(0, 0);
};


console.log(longestCommonSubsequence("abcde", "ace"))