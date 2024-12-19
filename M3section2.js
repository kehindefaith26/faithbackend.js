//Basic REST API (single endpoint)

const express = require('express'); // Importing Express
const app = express(); // Create an Express application

const PORT = 3000;

// Define the root GET endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the REST API!');
});

// Define the /api/names GET endpoint
app.get('/api/names', (req, res) => {
    const names = ['Kehinde', 'Daniel', 'Toke', 'Tijesunimi'];
    res.json({ names }); // Send JSON response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
