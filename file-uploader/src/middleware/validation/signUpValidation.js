const { body, validationResult } = require('express-validator');

const queryEmailNoInUse = require('../../controllers/signUpController.js');

const validateUser = () => {
  return [
    body('email')
      .notEmpty()
      .trim()
      .normalizeEmail()
      .custom((value) => {
        queryEmailNoInUse(value);
      })
      .withMessage('Email not valid'),
    body('name')
      .notEmpty()
      .trim()
      .isAlphanumeric()
      .withMessage('name not valid'),
    body('password').notEmpty().trim(),
    body('passwordConfirmation')
      .notEmpty()
      .trim()
      .custom((value, { req }) => {
        return value === req.body.password;
      })
      .withMessage('password must match, try again...'),

    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const checkError = errors.array().map((error) => error.msg);

        res.status(400).json({
          msg: checkError
        });

        return;
      }
      next();
    }
  ];
};

module.exports = { validateUser };
