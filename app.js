const cors = require('cors');
const express = require('express');
const axios = require('axios');
const { StatusCodes } = require('http-status-codes');
const {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
  getFunFact,
} = require('./src/controller');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Number Classifier API! Use /api/classify-number?number=<number> to classify a number.');
});
// app.get('/', (req, res) => {
//   // Default number
//   req.query.number = '371'; 
// });

// GET /api/classify-number 
app.get('/api/classify-number', async (req, res) => {
  const number = parseInt(req.query.number);

  // Input validation
  if (isNaN(number)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      number: req.query.number,
      error: true,
      message: 'Input must be a valid number.',
    });
  }

  // Classify the number
  const properties = [];
  if (isPrime(number)) properties.push('prime');
  if (isPerfect(number)) properties.push('perfect');
  if (isArmstrong(number)) properties.push('armstrong');
  if (number % 2 === 0) {
    properties.push('even'); // Add 'even' if the number is even
  } else {
    properties.push('odd'); // Add 'odd' if the number is odd
  }

  const funFact = await getFunFact(number);

  // Response
  res.status(StatusCodes.OK).json({
    number: number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties: properties,
    digit_sum: getDigitSum(number),
    fun_fact: funFact,
  });
});

// global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: true,
    message: 'Something went wrong on the server.',
  });
});

app.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});