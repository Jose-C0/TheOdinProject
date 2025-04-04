const express = require('express');

const indexController = require('../controllers/indexController.js');
const loginController = require('../controllers/logInController.js');
const signUpController = require('../controllers/signUpController.js');
const auth = require('../middleware/auth/passportLocalStrategy.js');

const router = express.Router();

router.get('/', indexController.getIndex);

router.get('/log-in', loginController.getLoginForm);
router.get('/sign-up', signUpController.getSignupForm);
router.post('/sign-up', signUpController.create);

// router.post('/sign-up', );

// router.post(
//   '/log-in',
//   auth.Authenticator('local', {
//     successRedirect: '/',
//     failureRedirect: '/log-in'
//   })
// );

(module.exports = router);
