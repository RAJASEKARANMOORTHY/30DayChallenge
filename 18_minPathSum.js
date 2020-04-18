// Minimum Path Sum
// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the 
// sum of all numbers along its path.

// Note: You can only move either down or right at any point in time.

// Example:

// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum_dfs = function (grid) {
    let rows = grid.length,
        columns = grid[0].length;

    let hash = new Map();

    let calculatePathSum = function (row, column, total) {
        let key = `${row}_${column}`;

        if (hash.has(key) && hash.get(key) <= total) {
            return hash.get(key);
        }

        let adjacentRow = row + 1;
        let adjacentColumn = column + 1;

        let rightSum = null,
            bottomSum = null;

        if (row >= 0 && row < rows && adjacentColumn >= 0 && adjacentColumn < columns) {
            rightSum = calculatePathSum(row, adjacentColumn, grid[row][adjacentColumn] + total);
            hash.set(`${row}_${adjacentColumn}`, rightSum);
        }

        if (adjacentRow >= 0 && adjacentRow < rows && column >= 0 && column < columns) {
            bottomSum = calculatePathSum(adjacentRow, column, grid[adjacentRow][column] + total);
            hash.set(`${adjacentRow}_${column}`, bottomSum);
        }

        if (rightSum != null && bottomSum != null)
            return Math.min(rightSum, bottomSum);
        else if (rightSum == null && bottomSum == null) {
            hash.set(`${row}_${column}`, total);
            return total;
        } else
            return rightSum || bottomSum;
    }

    return calculatePathSum(0, 0, grid[0][0]);
};


// Dynamic Programming
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (grid == null || grid.length == 0)
        return 0;

    let dp = Array(grid.length).fill(0).map(itm => Array(grid[0].length).fill(0));

    let rows = grid.length,
        columns = grid[0].length;

    for (let row = 0; row < rows; row++) {
        for (column = 0; column < columns; column++) {
            dp[row][column] += grid[row][column];

            // Left and Top
            if (row > 0 && column > 0) {
                dp[row][column] += Math.min(dp[row - 1][column], dp[row][column - 1])
            } else if (row > 0) { // Left Side
                dp[row][column] += dp[row - 1][column];
            } else if (column > 0) { // Top Side
                dp[row][column] += dp[row][column - 1];
            }
        }
    }

    return dp[dp.length - 1][dp[0].length - 1];
}

console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]));

console.log(minPathSum([
    [1, 2],
    [1, 1]
]));

console.log(minPathSum([
    [3, 8, 6, 0, 5, 9, 9, 6, 3, 4, 0, 5, 7, 3, 9, 3],
    [0, 9, 2, 5, 5, 4, 9, 1, 4, 6, 9, 5, 6, 7, 3, 2],
    [8, 2, 2, 3, 3, 3, 1, 6, 9, 1, 1, 6, 6, 2, 1, 9],
    [1, 3, 6, 9, 9, 5, 0, 3, 4, 9, 1, 0, 9, 6, 2, 7],
    [8, 6, 2, 2, 1, 3, 0, 0, 7, 2, 7, 5, 4, 8, 4, 8],
    [4, 1, 9, 5, 8, 9, 9, 2, 0, 2, 5, 1, 8, 7, 0, 9],
    [6, 2, 1, 7, 8, 1, 8, 5, 5, 7, 0, 2, 5, 7, 2, 1],
    [8, 1, 7, 6, 2, 8, 1, 2, 2, 6, 4, 0, 5, 4, 1, 3],
    [9, 2, 1, 7, 6, 1, 4, 3, 8, 6, 5, 5, 3, 9, 7, 3],
    [0, 6, 0, 2, 4, 3, 7, 6, 1, 3, 8, 6, 9, 0, 0, 8],
    [4, 3, 7, 2, 4, 3, 6, 4, 0, 3, 9, 5, 3, 6, 9, 3],
    [2, 1, 8, 8, 4, 5, 6, 5, 8, 7, 3, 7, 7, 5, 8, 3],
    [0, 7, 6, 6, 1, 2, 0, 3, 5, 0, 8, 0, 8, 7, 4, 3],
    [0, 4, 3, 4, 9, 0, 1, 9, 7, 7, 8, 6, 4, 6, 9, 5],
    [6, 5, 1, 9, 9, 2, 2, 7, 4, 2, 7, 2, 2, 3, 7, 2],
    [7, 1, 9, 6, 1, 2, 7, 0, 9, 6, 6, 4, 4, 5, 1, 0],
    [3, 4, 9, 2, 8, 3, 1, 2, 6, 9, 7, 0, 2, 4, 2, 0],
    [5, 1, 8, 8, 4, 6, 8, 5, 2, 4, 1, 6, 2, 2, 9, 7]
]))

console.time('Min Path Sum');
console.log(minPathSum([
    [0, 7, 7, 8, 1, 2, 4, 3, 0, 0, 5, 9, 8, 3, 6, 5, 1, 0],
    [2, 1, 1, 0, 8, 1, 3, 3, 9, 9, 5, 8, 7, 5, 7, 5, 5, 8],
    [9, 2, 3, 1, 2, 8, 1, 2, 3, 7, 9, 7, 9, 3, 0, 0, 3, 8],
    [3, 9, 3, 4, 8, 1, 2, 6, 8, 9, 3, 4, 9, 4, 8, 3, 6, 2],
    [3, 7, 4, 7, 6, 5, 6, 5, 8, 6, 7, 3, 6, 2, 2, 9, 9, 3],
    [2, 3, 1, 1, 5, 4, 7, 4, 0, 7, 7, 6, 9, 1, 5, 5, 0, 3],
    [0, 8, 8, 8, 4, 7, 1, 0, 2, 6, 1, 1, 1, 6, 4, 2, 7, 9],
    [8, 6, 6, 8, 3, 3, 5, 4, 6, 2, 9, 8, 6, 9, 6, 6, 9, 2],
    [6, 2, 2, 8, 0, 6, 1, 1, 4, 5, 3, 1, 7, 3, 9, 3, 2, 2],
    [8, 9, 8, 5, 3, 7, 5, 9, 8, 2, 8, 7, 4, 4, 1, 9, 2, 2],
    [7, 3, 3, 1, 0, 9, 4, 7, 2, 3, 2, 6, 7, 1, 7, 7, 8, 1],
    [4, 3, 2, 2, 7, 0, 1, 4, 4, 4, 3, 8, 6, 2, 1, 2, 5, 4],
    [1, 9, 3, 5, 4, 6, 4, 3, 7, 1, 0, 7, 2, 4, 0, 7, 8, 0],
    [7, 1, 4, 2, 5, 9, 0, 4, 1, 4, 6, 6, 8, 9, 7, 1, 4, 3],
    [9, 8, 6, 8, 2, 6, 5, 6, 2, 8, 3, 2, 8, 1, 5, 4, 5, 2],
    [3, 7, 8, 6, 3, 4, 2, 3, 5, 1, 7, 2, 4, 6, 0, 2, 5, 4],
    [8, 2, 1, 2, 2, 6, 6, 0, 7, 3, 6, 4, 5, 9, 4, 4, 5, 7]
]))
console.timeEnd('Min Path Sum');