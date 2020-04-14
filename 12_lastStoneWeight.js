// Last Stone Weight
// We have a collection of stones, each stone has a positive integer weight.

// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y. 
//  The result of this smash is:

// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1
// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.


// Note:

// 1 <= stones.length <= 30
// 1 <= stones[i] <= 1000

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {

    if (stones.length == 1)
        return stones[0];


    let heapStone = new Heap(stones);
    do {
        heapStone.Heapify();
        heapStone.Heapify();
        let first = heapStone.Pop();
        let second = heapStone.Pop();

        if (first != null && second != null) {
            if (first >= second) {
                heapStone.Insert(first - second);
            }
        } else {
            break;
        }

    } while (heapStone.Numbers.length > 1)

    return heapStone.Numbers[0];
};

var Heap = function (numbers) {
    this.Numbers = numbers;
    this.Length = numbers.length;

    this.Insert = function (value) {
        this.Numbers.push(value);
        this.Length += 1;
    };

    this.Pop = function () {
        if (this.Numbers.length > 0) {
            return this.Numbers.pop();
        }
        return null;
    };


    this.Heapify = function () {
        if (this.Length > 1) {
            for (let index = parseInt(this.Length / 2); index >= 0; index--) {
                this.MaxHeap(index);
            }

            this.Swap(0, this.Length - 1);
            this.Length -= 1;
        }
    };

    this.MaxHeap = function (position) {
        let left = 2 * position + 1;
        let right = 2 * position + 2;

        let maxIndex = position;

        if (left >= 0 && left < this.Length && this.Numbers[maxIndex] < this.Numbers[left]) {
            maxIndex = left
        }

        if (right >= 0 && right < this.Length && this.Numbers[maxIndex] < this.Numbers[right]) {
            maxIndex = right
        }

        if (maxIndex != position) {
            this.Swap(maxIndex, position);
            this.MaxHeap(maxIndex);
        }
    };

    this.Swap = function (source, target) {
        var temp = this.Numbers[source];
        this.Numbers[source] = this.Numbers[target];
        this.Numbers[target] = temp;
    }
}

// lastStoneWeight([2, 7, 4, 1, 8, 1])
lastStoneWeight([1])