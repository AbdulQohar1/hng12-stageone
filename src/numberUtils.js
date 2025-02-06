const axios = require('axios');
const { StatusCodes } = require('http-status-codes');

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
  return String(num)
  .split('')
  .reduce((acc, digit) => acc + Number(digit), 0);
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

const numberLogic = async (req ,res) => {
  const number = parseInt(req.query.number);

  //  Input validation
  if (isNaN(number)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      number: req.query.number,
      error: true,
      // message: "Input must be a valid number."
    });
  };

  const prime = isPrime(number);
  const perfect = isPerfect(number);
  const armstrong = isArmstrong(number);

  // Classify the number
  const properties = [];
  if (prime) properties.push('prime');
  if (perfect) properties.push('perfect');
  if (armstrong) properties.push('armstrong');
  properties.push(number % 2 === 0 ? 'even' : 'odd');

  const funFact = await getFunFact(number);

  res.status(StatusCodes.OK).json({
    number: number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties: properties,
    digit_sum: getDigitSum(number),
    fun_fact: funFact,
  })
}

module.exports = {
  numberLogic

};
