//Array Manipulation

// Function to sort an array in ascending order
function sortAscending(arr) {
    return arr.slice().sort((a, b) => a - b);
}

// Function to sort an array in descending order
function sortDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}

// Function to reverse an array
function reverseArray(arr) {
    return arr.slice().reverse();
}

// Function to find the second largest element in an array
function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements
    }
    const uniqueArr = [...new Set(arr)]; // Remove duplicates
    uniqueArr.sort((a, b) => b - a); // Sort in descending order
    return uniqueArr[1]; // Return the second largest
}

// Function to remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example usage
const numbers = [5, 3, 8, 1, 2, 8, 3, 7];

console.log("Original Array:", numbers);
console.log("Sorted Ascending:", sortAscending(numbers));
console.log("Sorted Descending:", sortDescending(numbers));
console.log("Reversed Array:", reverseArray(numbers));
console.log("Second Largest Element:", findSecondLargest(numbers));
console.log("Array without Duplicates:", removeDuplicates(numbers));