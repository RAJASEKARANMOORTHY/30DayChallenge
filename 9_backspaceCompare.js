// Backspace String Compare
// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:

// 1 <= S.length <= 200
// 1 <= T.length <= 200
// S and T only contain lowercase letters and '#' characters.
// Follow up:

// Can you solve it in O(N) time and O(1) space?
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    let source = S.length - 1;
    let target = T.length - 1;
    let backspace = '#';

    // Ignore back space and adjacent charaters which require to be delete
    let removeBackSpace = function(current, str) {
        let noOfBackSpace = 0;

        while (current >= 0 && (str[current] == backspace || noOfBackSpace > 0)) {
            if (str[current] == backspace) {
                current--;
                noOfBackSpace++;
            } else if (noOfBackSpace > 0) {
                current--;
                noOfBackSpace--;
            }
        }

        return current;
    }

    // Traverse from backward
    while (source >= 0 || target >= 0) {

        source = removeBackSpace(source,S);
        target = removeBackSpace(target,T);

        if ((source >= 0 && target >= 0) && S[source] != T[target]) {
            return false;
        }

        if ((source >= 0) != (target >= 0)) {
            return false;
        }

        source--;
        target--;
    }

    return true;
};

// console.log(backspaceCompare("ab#c", "ad#c"));
// console.log(backspaceCompare("ab##", "c#d#"));
// console.log(backspaceCompare("a##c", "#a#c"));
// console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));


