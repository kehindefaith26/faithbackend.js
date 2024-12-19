//Temperature Conversion Function
const readline = require("readline");

// Create an interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to convert temperature
function convertTemperature(scale, temperature) {
  if (scale.toLowerCase() === "celsius") {
    return (temperature * 9/5) + 32;   // Convert Celsius to Fahrenheit
  } else if (scale.toLowerCase() === "fahrenheit") {
    return (temperature - 32) * 5/9;   // Convert Fahrenheit to Celsius
  } else {
    return null; // Invalid scale
  }
}

// Function to get user input for temperature conversion
function getTemperatureInput() {
  rl.question("Enter the scale (Celsius or Fahrenheit): ", (scale) => {
    rl.question("Enter the temperature: ", (temp) => {
      const temperature = parseFloat(temp);
      if (isNaN(temperature)) {
        console.log("Please enter a valid number for temperature.");
        rl.close();
        return;
      }

      const convertedTemp = convertTemperature(scale, temperature);
      if (convertedTemp === null) {
        console.log("Invalid scale. Please enter either 'Celsius' or 'Fahrenheit'.");
      } else {
        console.log(`Converted Temperature: ${convertedTemp.toFixed(2)} degrees ${scale.toLowerCase() === "celsius" ? "Fahrenheit" : "Celsius"}`);
      }
      rl.close(); // Close the readline interface
    });
  });
}

// Run the temperature conversion function
getTemperatureInput();