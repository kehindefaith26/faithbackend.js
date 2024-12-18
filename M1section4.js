const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to perform the calculation
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        throw new Error("Error: Division by zero is not allowed.");
      }
      return num1 / num2;
    default:
      throw new Error("Error: Invalid operator. Please use +, -, *, or /.");
  }
}

// Function to get user input and perform calculations
function getInput() {
  rl.question("Enter the first number: ", (input1) => {
    rl.question("Enter the second number: ", (input2) => {
      rl.question("Enter the operator (+, -, *, /): ", (operator) => {
        try {
          const num1 = parseFloat(input1);
          const num2 = parseFloat(input2);

          // Validate inputs
          if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Error: Please enter valid numbers.");
          }

          // Perform calculation
          const result = calculate(num1, num2, operator);
          console.log(`Result: ${result}`);
        } catch (error) {
          console.log(error.message);
        } finally {
          // Ask for new input again
          getInput();
        }
      });
    });
  });
}

// Start the calculator
getInput();