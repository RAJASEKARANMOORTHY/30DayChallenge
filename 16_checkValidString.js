// Valid Parenthesis String
// Given a string containing only three types of characters: '(', ')' and '*', 
// write a function to check whether this string is valid. We define the validity of a string by these rules:

// Any left parenthesis '(' must have a corresponding right parenthesis ')'.
// Any right parenthesis ')' must have a corresponding left parenthesis '('.
// Left parenthesis '(' must go before the corresponding right parenthesis ')'.
// '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string.
// An empty string is also valid.
// Example 1:
// Input: "()"
// Output: True
// Example 2:
// Input: "(*)"
// Output: True
// Example 3:
// Input: "(*))"
// Output: True
// Note:
// The string size will be in the range [1, 100].

// Greedy Approach
/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    let start = 0,
        end = 0;

    for (let char of s) {
        start += char == '(' ? 1 : -1;
        end += char != ')' ? 1 : -1;

        if (end < 0)
            break;

        if (start < 0)
            start = 0;
            
        // start = Math.max(start, 0);
    }

    console.log(`Input : ${s} - Output : ${start == 0}`)

    return start == 0;
};

checkValidString("()");
checkValidString("(*)"); // start = Math.max(start, 0;
checkValidString(")"); // end < 0 -> Break
checkValidString("*)");
checkValidString("(*");
checkValidString("()()");
checkValidString("(()");
checkValidString("(*))");
checkValidString("((*)");
checkValidString("***");