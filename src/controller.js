const axios = require('axios');

// Check if a number is prime
const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

// Check if a number is perfect
const isPerfect = (num) => {
  if (num < 2) return false;
  let sum = 1;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) {
      sum += i + num / i;
    }
  }
  return sum === num;
};

// Check if a number is Armstrong
const isArmstrong = (num) => {
  const digits = String(num).split('');
  const power = digits.length;
  const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
  return sum === num;
};

// Calculate the sum of digits
const getDigitSum = (num) => {
  return String(num).split('').reduce((acc, digit) => acc + Number(digit), 0);
};

// Fetch fun fact from Numbers API
const getFunFact = async (num) => {
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
    return response.data.text;
  } catch (error) {
    return 'Fun fact not available.';
  }
};

module.exports = {
  isPrime,
  isPerfect,
  isArmstrong,
  getDigitSum,
  getFunFact,
};
