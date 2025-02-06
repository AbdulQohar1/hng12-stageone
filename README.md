# HNG12 Stage 1 Task - Number Classifier API
The Number Classifier API is a Node.js-based API that classifies a given number and provides information about its properties, such as whether it is prime, perfect, Armstrong, even, or odd. It also calculates the sum of its digits and fetches a fun fact about the number using the Numbers API (http://numbersapi.com/).

## Features
  💡 Number Classification: Determines if a number is prime, perfect, Armstrong, even, or odd.

  💡 Digit Sum Calculation: Calculates the sum of the digits of the number.

  💡 Fun Fact: Fetches an interesting mathematical fact about the number from the Numbers API.

  💡 Error Handling: Returns appropriate error responses for invalid inputs.

## API Endpoint
  🤞 GET /api/classify-number
    Classifies a number and returns its properties.

  **  Parameters**
  💡number (required): A valid integer.

  Example Request: GET /api/classify-number?number=371

  Example Response (200 OK)
  {
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
  };

  {
    "number": "alphabet",
    "error": true
  }

  ## Setup and Installation
  ### Prerequisites
    Node.js (v14 or higher)

    npm (Node Package Manager)

  ## Steps
    1. Clone the repository: git clone https://github.com/AbdulQohar1/hng12-stageone, cd into your repo

    2. Install dependencies:npm install.

    3. Start the server: node app.js.
    
    4.Test the API: Open your browser or use a tool like Postman or curl to access the API: . 

  ## API DOCUMENTATION
    ### Endpoint 

  ## Backlink:
  Looking for experienced Node.js developers? Visit:https://hng.tech/hire/nodejs-developers

  ## Deployment
  The API is deployed and publicly accessible at:
 https://hng12-stage1-jo6f.onrender.com/
  This API is deployed using Render with a fast response time (< 500ms)
  
  ## Production Setup
  To start the server in production: npm run start
  **Render**
  1. Create a new Web Service
  2. Connect your GitHub repository
  3. Set build command: npm install
  4. Set start command: npm start Deployed on Render and is accessible on:

  ## Environment Variables
  PORT: Server port (default: 3000)

  ## Author
  Abdulqohar (QxUnkn0wn)