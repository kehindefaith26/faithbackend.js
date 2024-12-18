const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to get a number from the user
function getNumber(promptMessage) {
  return new Promise((resolve) => {
    rl.question(promptMessage, (answer) => {
      const number = parseFloat(answer);
      if (!isNaN(number)) {
        resolve(number);
      } else {
        console.log("Please enter a valid number.");
        resolve(getNumber(promptMessage)); // Retry if invalid input
      }
    });
  });
}

// Main calculator function
async function calculate() {
  const num1 = await getNumber("Enter the first number: ");
  const num2 = await getNumber("Enter the second number: ");

  const sum = num1 + num2;
  const difference = num1 - num2;
  const product = num1 * num2;

  let quotient;
  if (num2 === 0) {
    quotient = "Cannot divide by zero.";
  } else {
    quotient = num1 / num2;
  }

  console.log(`Results:
    Addition: ${num1} + ${num2} = ${sum.toFixed(2)}
    Subtraction: ${num1} - ${num2} = ${difference.toFixed(2)}
    Multiplication: ${num1} * ${num2} = ${product.toFixed(2)}
    Division: ${num1} / ${num2} = ${quotient.toString()}`);
  
  rl.close(); 
}

// Run the calculator
calculate();
