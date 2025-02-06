const express = require('express');
const router = express.Router();
const {inputNumber} = require('./controller');

router.get('/classify-number', inputNumber);

module.exports = router;