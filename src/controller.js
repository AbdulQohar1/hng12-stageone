const { numberLogic} = require('./numberUtils');

const inputNumber = async(req, res) => {
  // numberLogic(req, res);
  try {
    await numberLogic(req, res);
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "An unexpected error occurred.",
    });
  }
};

module.exports = { inputNumber};