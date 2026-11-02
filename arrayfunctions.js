// 4. Find Maximum Number
function findMaximum(numbers) {
    return Math.max(...numbers);
}

console.log(findMaximum([10, 25, 5, 40, 15]));
// Output: 40


// 5. Find Minimum Number
function findMinimum(numbers) {
    return Math.min(...numbers);
}

console.log(findMinimum([10, 25, 5, 40, 15]));
// Output: 5


// 6. Sum of Array
function sumArray(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumArray([10, 20, 30, 40]));
// Output: 100


// 7. Filter Array
function filterArray(numbers, condition) {
    return numbers.filter(condition);
}

console.log(filterArray([1, 2, 3, 4, 5, 6], number => number > 3));
// Output: [4, 5, 6]