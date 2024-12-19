//HTTP Request Client

const axios = require('axios');

const API_KEY = '35e21463258c23e86339e48193fb67bb';
const CITY = 'London';

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`;

    try {
        const response = await axios.get(url);
        const weatherData = response.data;

        console.log(`Weather in ${weatherData.name}:`);
        console.log(`Temperature: ${weatherData.main.temp}°C`);
        console.log(`Weather: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}

// Call the function to get weather data
getWeather();