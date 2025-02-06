const express = require('express');
const cors = require('cors');
const { StatusCodes } = require('http-status-codes');
const {inputNumber} = require('./src/controller');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); 

// Root route
app.get('/', (req, res) => {
  // Default number
  // req.query.number = '371'; 
  inputNumber(req, res);
});

app.use('/api', require('./src/route'));

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