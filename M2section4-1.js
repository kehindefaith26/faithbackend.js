//Sorting Algorithm Implementation

// Bubble Sort Implementation
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Insertion Sort Implementation
function insertionSort(arr) {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
        const key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];

console.log("Original Array:", numbers);

const bubbleSortedArray = bubbleSort([...numbers]); // Using spread operator to avoid modifying the original array
console.log("Bubble Sorted Array:", bubbleSortedArray);

const insertionSortedArray = insertionSort([...numbers]); // Using spread operator to avoid modifying the original array
console.log("Insertion Sorted Array:", insertionSortedArray);