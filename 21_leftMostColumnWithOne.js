// Leftmost Column with at Least a One
// (This problem is an interactive problem.)

// A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.

// Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.

// You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:

// BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
// BinaryMatrix.dimensions() returns a list of 2 elements [m, n], which means the matrix is m * n.
// Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.

// For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.



// Example 1:



// Input: mat = [[0,0],[1,1]]
// Output: 0
// Example 2:



// Input: mat = [[0,0],[0,1]]
// Output: 1
// Example 3:



// Input: mat = [[0,0],[0,0]]
// Output: -1
// Example 4:



// Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
// Output: 1


// Constraints:

// m == mat.length
// n == mat[i].length
// 1 <= m, n <= 100
// mat[i][j] is either 0 or 1.
// mat[i] is sorted in a non-decreasing way.

/**
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

function BinaryMatrix() {
    this.get = function (x, y) {
        if (this.counter > this.maxCounter) {
            throw new exception("Maximum reached")
        } else {
            this.counter += 1;
            return this.matrix[x][y];
        }
    }

    this.set = function (matrix) {
        this.maxCounter = 1000;
        this.counter = 0;
        this.matrix = matrix;
    }

    this.dimensions = function () {
        return [this.matrix.length, this.matrix[0].length];
    }
}

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function (binaryMatrix) {
    let [rows, columns] = binaryMatrix.dimensions();

    if (rows == 0 || columns == 0) {
        return -1;
    }

    let result = -1;
    let row = 0,
        column = columns - 1;

    while (row < rows && column >= 0) {
        if (binaryMatrix.get(row, column) == 1) {
            result = column;
            column--;
        } else {
            row++;
        }
    }

    return result;
};


var binaryMatrix = new BinaryMatrix();
// binaryMatrix.set([
//     [0, 0],
//     [1, 1]
// ]);

// leftMostColumnWithOne(binaryMatrix);

binaryMatrix.set([
    [0, 0],
    [0, 1]
])

leftMostColumnWithOne(binaryMatrix);