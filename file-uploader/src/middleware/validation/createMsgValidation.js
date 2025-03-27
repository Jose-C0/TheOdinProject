const { body, oneOf, validationResult } = require('express-validator');

const leastOneErr =
  'At least one valid name field (title, description)  must be provided';

const validateMsg = () => {
  return [
    oneOf(
      [
        body('title')
          .trim() /* .isEmpty() */
          .isLength({ max: 500 }),
        body('description')
          .trim() /* .isEmpty() */
          .isLength({ max: 255 })
      ],
      { message: `${leastOneErr}` }
    ),

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

module.exports = { validateMsg };
