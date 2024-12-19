//Linear Search and Binary Search

// Linear Search Implementation
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Return the index of the found element
        }
    }
    return -1; // Return -1 if the element is not found
}

// Binary Search Implementation
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Return the index of the found element
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Return -1 if the element is not found
}

// Performance Comparison
function compareSearchPerformance(arr, target) {
    console.time("Linear Search Time");
    const linearResult = linearSearch(arr, target);
    console.timeEnd("Linear Search Time");

    console.time("Binary Search Time");
    const binaryResult = binarySearch(arr, target);
    console.timeEnd("Binary Search Time");

    console.log(`Linear Search Result: ${linearResult}`);
    console.log(`Binary Search Result: ${binaryResult}`);
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49];
const target = 25;

console.log(`Searching for ${target} in the array...`);
compareSearchPerformance(sortedArray, target);