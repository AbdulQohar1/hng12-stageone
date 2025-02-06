# DESCRIPTION

This project is a basic Node.js backend application built with the express framework. It serves a single API endpoint (GET /) that returns the following information in JSON format:
  💥 Email: The email address used to register on the HNG12  Slack workspace.
  💥Current Datetime: The current datetime in ISO 8601 format.
  💥 GitHub URL: The URL of the project's codebase on GitHub.

# SETUP INSTRUCTIONS
  Follow these procedure to run the project locally on your machine.

# Prerequisites
  Node.js (v14 or higher) 
  npm (Node Package Manager)

# Steps
1. Clone the repository.
  git clone https://github.com/AbdulQohar1/HNG12-Zero.git, cd into your repo.
2. Install dependencies: npm install.
3. Start the server: npm run start.
4. Test the API:
  Open your browser or use a tool like Postman or curl to access the API:
  http://localhost:3000/

# API DOCUMENTATION
## EndPoint
  URL: https://hng12-zero.onrender.com
  Method: GET
  Response Format: JSON

## Response Format
  {"email":"adebayoabbdqohar001@gmail.com","current_datetime":"2025-01-30T06:57:27.168Z","github_url":"https://github.com/AbdulQohar1/HNG12-Zero.git"}

# Backlink: 
Looking for experienced Node.js developers? Visit:https://hng.tech/hire/nodejs-developers

# Deployment
This API is deployed using Render with a fast response time (< 500ms).

# Production Setup
To start the server in production: npm run start

  **Render**
  1. Create a new Web Service
  2. Connect your GitHub repository
  3. Set build command: npm install
  4. Set start command: npm start
Deployed on Render and is accessible on: (https://hng12-zero.onrender.com). 

# Environment Variables
PORT: Server port (default: 3000)

# Author
Abdulqohar (QxUnkn0wn)


