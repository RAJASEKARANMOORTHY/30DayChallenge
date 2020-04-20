var findRotateIndex = function (nums) {
    let start = 0,
        end = nums.length - 1;

    if (nums[start] < nums[end]) {
        return 0;
    }

    while (start <= end) {
        let middle = parseInt(start + (end - start) / 2);

        if (nums[middle] > nums[middle + 1]) {
            return middle + 1;
        } else {
            if (nums[middle] < nums[start]) {
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
    }

    return 0;
}

console.log(findRotateIndex([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Rotate Index at 0
console.log(findRotateIndex([5, 6, 7, 8, 9, 1, 2, 3, 4])); // Rotate Index after middle
console.log(findRotateIndex([4, 5, 6, 7, 8, 9, 1, 2, 3])); // Rotate Index at right side
console.log(findRotateIndex([6, 7, 8, 9, 1, 2, 3, 4, 5])); // Rotate Index at left side