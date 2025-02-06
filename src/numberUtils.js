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

const getParity = (num) => (num % 2 === 0 ? 'even' : 'odd');

// Calculate the sum of digits
const digitSum = (num) => Math.abs(num).toString().split('').reduce((acc, val) => acc + Number(val), 0);

const getFunFact = async (num) => {
  try {
      const response = await axios.get(`http://numbersapi.com/${num}/math?json`, { timeout: 500 });
      return response.data.text;
  } catch (error) {
      console.error('Numbers API error:', error.message);
      return 'Fun fact not available at the moment.';
  }
};
// const getDigitSum = (num) => {
//   return String(num)
//   .split('')
//   .reduce((acc, digit) => acc + Number(digit), 0);
// };

// Fetch fun fact from Numbers API
// const getFunFact = async (num) => {
//   // If the number is Armstrong, return the custom fact immediately
//   if (isArmstrong(num)) {
//     const digits = String(num).split('');
//     const power = digits.length;
//     const breakdown = digits.map(d => `${d}^${power}`).join(' + '); // Example: "3^3 + 7^3 + 1^3"
//     return `${num} is an Armstrong number because ${breakdown} = ${num}`;
//   }

//   try {
//     // Otherwise, fetch from Numbers API
//     const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
//     return response.data.text;
//   } catch (error) {
//     return 'Fun fact not available.';
//   }
// };

// const getFunFact = async (num) => {
//   // If the number is Armstrong, return the custom fact immediately
//   if (isArmstrong(num)) {
//     const digits = String(num).split('');
//     const power = digits.length;
//     const breakdown = digits.map(d => `${d}^${power}`).join(' + '); // Example: "3^3 + 7^3 + 1^3"
//     return `${num} is an Armstrong number because ${breakdown} = ${num}`;
//   }

//   try {
//     // Otherwise, fetch from Numbers API
//     const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
//     return response.data.text;
//   } catch (error) {
//     return 'Fun fact not available.';
//   }
// };

// const getFunFact = async (num) => {
//   try {
//     // const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
//     // let fact = response.data.text;

//      // If the number is Armstrong, customize the fact
//     //  if (isArmstrong(num)) {
//     //   const digits = String(num).split('');
//     //   const power = digits.length;
//     //   const breakdown = digits.map(d => `${d}^${power}`).join(' + '); // Example: "3^3 + 7^3 + 1^3"
//     //   fact = `${num} is an Armstrong number because ${breakdown} = ${num}`;
//     // }
//     if (isArmstrong(num)) {
//       const digits = String(num).split('');
//       const power = digits.length;
//       const breakdown = digits.map(d => `${d}^${power}`).join(' + '); // Example: "3^3 + 7^3 + 1^3"
//       return `${num} is an Armstrong number because ${breakdown} = ${num}`;
//     }

//     // Otherwise, fetch from Numbers API
//     const response = await axios.get(`http://numbersapi.com/${num}/math?json`);
//     return response.data.text;

//     return fact;
//   } catch (error) {
//     return 'Fun fact not available.';
//   }
// };

const numberLogic = async (req ,res) => {
  const number = parseInt(req.query.number);

  //  Input validation
  if (isNaN(number)) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      number: number,
      error: true,
      // message: "Input must be a valid number."
    });
  };

  const absNum = Math.abs(number);
  const properties = [];
  let funFact = '';

  if (isArmstrong(absNum)) {
    properties.push('armstrong');
    const digits = absNum.toString().split('').map(Number);
    const power = digits.length;
    const calculation = digits.map(d => `${d}^${power}`).join(' + ');
    funFact = `${number} is an Armstrong number because ${calculation} = ${absNum}`;
  }

  properties.push(getParity(number));
  // const prime = isPrime(number);
  // const perfect = isPerfect(number);
  // const armstrong = isArmstrong(number);

  // // Classify the number
  // const properties = [];
  // // if (prime) properties.push('prime');
  // // if (perfect) properties.push('perfect');
  // if (armstrong) properties.push('armstrong');
  // properties.push(number % 2 === 0 ? 'even' : 'odd');

  // const funFact = await getFunFact(number);

  res.status(StatusCodes.OK).json({
    number: number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties: [...new Set(properties)],
    digit_sum: digitSum(number), 
    fun_fact: funFact  || await getFunFact(number),
  })
}

module.exports = {
  numberLogic

};
