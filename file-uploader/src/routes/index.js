const express = require('express');

const indexController = require('../controllers/indexController.js');
const logInController = require('../controllers/logInController.js');
const logOutController = require('../controllers/logOutController.js');

const signUpController = require('../controllers/signUpController.js');

const mdlSignUp = require('../middleware/validation/signUpValidation.js');
const mdlLogIn = require('../middleware/validation/logInValidation.js');
const auth = require('../middleware/auth/passportLocalStrategy.js');

const router = express.Router();

router.get('/', indexController.getIndex);
router.get('/log-out', logOutController.getLogout);
router.get('/sign-up', signUpController.getSignupForm);
router.get('/log-in', logInController.getLoginForm);

router.post(
  '/log-in',
  mdlLogIn.validateUser(),
  auth.passportLocalStrategy.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/log-in'
  })

);

router.post('/sign-up', mdlSignUp.validateUser(), signUpController.create);

module.exports = router;
