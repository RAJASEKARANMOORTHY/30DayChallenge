// 221. Maximal Square

// Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

// Example:

// Input: 

// 1 0 1 0 0
// 1 0 1 1 1
// 1 1 1 1 1
// 1 0 0 1 0

// Output: 4

// https://leetcode.com/problems/maximal-square/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix == null || matrix.length == 0 || matrix.length == 1)
        return 0;

    let rows = matrix.length,
        columns = matrix[0].length;

    let deepProgram = Array(rows + 1).fill(0).map(itm => Array(columns + 1).fill(0));
    let maxSquareLength = 0;

    // Traverse from the diagonal position
    for (let row = 1; row <= rows; row++) {
        for (let column = 1; column <= columns; column++) {
            if (matrix[row - 1][column - 1] == 1) {
                let left = deepProgram[row][column - 1];
                let top = deepProgram[row - 1][column];

                let diagnolTop = deepProgram[row - 1][column - 1];
                let minimumAdjacent = Math.min(left, top);

                deepProgram[row][column] = Math.min(minimumAdjacent, diagnolTop) + 1;
                maxSquareLength = Math.max(maxSquareLength, deepProgram[row][column]);
            }
        }
    }
    return maxSquareLength * maxSquareLength;
};


maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
])