const { body, oneOf, validationResult } = require('express-validator');

const leastOneErr =
  'At least one valid name field (first_name, last_name, or username) must be provided';

const validateUser = () => {
  return [
    oneOf(
      [
        body('first_name').trim()/* .isEmpty() */.isLength({ max: 50 }),
        body('last_name').trim()/* .isEmpty() */.isLength({ max: 50 }),
        body('username').trim()/* .isEmpty() */.isLength({ max: 255 })
      ],
      { message: `${leastOneErr}` }
    ),
    body('password')
      .trim()
      // .isEmpty()
      .isLength({ max: 255 })
      .withMessage('Password invalid'),
    body('passwordConfirmation')
      .trim()
      .custom((value, { req }) => {
        return value === req.body.password;
      })
      .withMessage('password must match'),

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
