// Number of Islands
// Solution
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:

// Input:
// 11110
// 11010
// 11000
// 00000

// Output: 1
// Example 2:

// Input:
// 11000
// 11000
// 00100
// 00011

// Output: 3

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let land = 1,
        water = 0;

    if (grid == null || grid[0] == null)
        return0;
        
    let rows = grid.length,
        columns = grid[0].length;

    let adjacents = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];

    let queue = [];
    let hash = new Map();

    let processQueue = function () {
        while (queue.length > 0) {
            let [row, column] = queue.shift();
            for (let adjacent of adjacents) {
                let [adjacentRow, adjacentColumn] = adjacent;
                adjacentRow += row;
                adjacentColumn += column;
                let adjacentKey = `${adjacentRow}_${adjacentColumn}`;

                if (adjacentRow >= 0 && adjacentRow < rows && adjacentColumn >= 0 && adjacentColumn < columns && grid[adjacentRow][adjacentColumn] == land && !hash.has(adjacentKey)) {
                    hash.set(adjacentKey, true);
                    queue.push([adjacentRow, adjacentColumn]);
                }
            }
        }
    }
    let counter = 0;

    for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
            let key = `${row}_${column}`
            if (grid[row][column] == land && !hash.has(key)) {
                counter++;
                hash.set(key, true);
                queue.push([row, column]);
                processQueue();
            }
        }
    }

    return counter;
}


// console.log(numIslands([
//     [1, 1, 1, 1, 0],
//     [1, 1, 0, 1, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0]
// ]))

// console.log(numIslands([
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 1]
// ]))

console.log(numIslands([
    [1, 1, 1],
    [0, 1, 0],
    [1, 1, 1]
]));