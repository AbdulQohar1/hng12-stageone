const express = require('express');
const cors = require('cors');
const {classifyNumber} = require('./src/controller');

const app = express();
const port = process.env.PORT || 3000;
const { processNumber } = require('./src/controller');

// Enable CORS
app.use(cors());

// Root Endpoint - Process number 371 by default
app.get('/', (req, res) => {
    req.query.number = '371'; // Default number
    processNumber(req, res); // Reuse the existing processing function
});

// API Route for custom numbers
app.use('/api', require('./src/route'));

// 404 Error Handling for Undefined Routes
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});


app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});