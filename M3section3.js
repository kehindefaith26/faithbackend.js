//API Data Fetching

const axios = require('axios'); 

// Function to fetch data from a weather API
async function fetchWeatherData() {
    const apiKey = '35e21463258c23e86339e48193fb67bb';
    const city = 'London';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        // Make the API request
        const response = await axios.get(url);

        // Extract relevant data
        const weatherData = response.data;
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${(weatherData.main.temp - 273.15).toFixed(2)}°C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
    } catch (error) {
        // Handle errors
        console.error('Error fetching weather data:', error.message);
    }
}

// Call the function
fetchWeatherData();
