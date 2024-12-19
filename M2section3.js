//Stack Implementation
class Stack {
    constructor() {
        this.items = [];
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Pop an element off the stack
    pop() {
        if (this.isEmpty()) {
            return null; // or throw an error
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack
    peek() {
        if (this.isEmpty()) {
            return null; 
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the size of the stack
    size() {
        return this.items.length;
    }

    clear() {    //clear the stack
        this.items = [];
    }
}

// Function to reverse a string using the stack
function reverseString(str) {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = '';
    while (!stack.isEmpty()) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}

// Function to check for balanced parentheses
function isBalanced(expression) {
    const stack = new Stack();
    const openingBrackets = '({[';
    const closingBrackets = ')}]';

    for (let char of expression) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.isEmpty()) {
                return false; // No matching opening bracket
            }
            const top = stack.pop();
            if (openingBrackets.indexOf(top) !== closingBrackets.indexOf(char)) {
                return false; // Mismatched brackets
            }
        }
    }
    return stack.isEmpty(); // If stack is empty then brackets are balanced
}

// Example usage
const str = "Hello, World!";
console.log(`Original String: ${str}`);
console.log(`Reversed String: ${reverseString(str)}`);

const expression = "{[()]}";
console.log(`Is the expression "${expression}" balanced? ${isBalanced(expression)}`);