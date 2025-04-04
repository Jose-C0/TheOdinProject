const { body, validationResult } = require('express-validator');

const validateUser = () => {
  return [
    body('username')
      .notEmpty()
      .trim(),
    body('password')
      .notEmpty()
      .trim(),

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
