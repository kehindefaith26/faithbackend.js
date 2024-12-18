const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to determine letter grade based on score
function getLetterGrade(score) {
  if (score >= 70) {
    return 'A';
  } else if (score >= 60) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else if (score >= 45) {
    return 'D';
} else if (score >= 40) {
    return 'E';
  } else {
    return 'F';
  }
}

// Function to get student scores and calculate grades
function getScores() {
  rl.question("Enter a student score (or type 'exit' to finish): ", (input) => {
    if (input.toLowerCase() === 'exit') {
      console.log("Grade calculation finished.");
      rl.close(); // Close the readline interface
      return;
    }

    const score = parseFloat(input);
    if (isNaN(score) || score < 0 || score > 100) {
      console.log("Please enter a valid score between 0 and 100.");
    } else {
      const grade = getLetterGrade(score);
      console.log(`Score: ${score} - Grade: ${grade}`);
    }

    // Call getScores again to allow for multiple inputs
    getScores();
  });
}

// Start the grade calculator
getScores();