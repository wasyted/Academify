const { validationResult } = require('express-validator');

// Define the middleware function to validate user data
const validateUserData = (req, res, next) => {
  // Perform validation using express-validator or any other validation library
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // If there are validation errors, return a response with the errors
    return res.status(400).json({ errors: errors.array() });
  }
  // If validation passes, proceed with the next middleware or route handler
  next();
};

// Export the middleware function
module.exports = validateUserData;