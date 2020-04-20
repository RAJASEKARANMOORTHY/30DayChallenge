var binarySearch = function (nums, target) {
    let start = 0,
        end = nums.length - 1;

    while (start <= end) {
        let middle = parseInt(start + (end - start) / 2);

        if (target == nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}

var binarySearchByPosition = function (nums, start, end, target) {
    while (start <= end) {
        let middle = parseInt(start + (end - start) / 2);

        if (target == nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return -1;
}
// console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 8, 5));
// console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 8, 6));
// console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 8, 7));
// console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 8, 8));
// console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 8, 9));
// console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9], 4, 8, 10));

console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8, 5));
console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8, 6));
console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8, 7));
console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8, 8));
console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8, 9));
console.log(binarySearchByPosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4, 8, 10));

// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 2));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 9));


// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
// console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10));