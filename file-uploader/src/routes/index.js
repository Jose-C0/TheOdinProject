const express = require('express');

const multer = require('multer');
const upload = multer({ dest: '/tmp/' });

const indexController = require('../controllers/indexController.js');
const logInController = require('../controllers/logInController.js');
const logOutController = require('../controllers/logOutController.js');

const signUpController = require('../controllers/signUpController.js');

const mdlSignUp = require('../middleware/validation/signUpValidation.js');
const mdlLogIn = require('../middleware/validation/logInValidation.js');
const auth = require('../middleware/auth/passportLocalStrategy.js');

const router = express.Router();

router.get('/', indexController.getIndex);
router.get('/sign-up', signUpController.getSignupForm);
router.get('/log-in', logInController.getLoginForm);
router.get('/log-out', logOutController.getLogout);

router.post(
  '/log-in',
  mdlLogIn.validateUser(),
  auth.passportLocalStrategy.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/log-in'
  })

);

router.post('/sign-up', mdlSignUp.validateUser(), signUpController.create);

router.post('/file-upload', upload.single('avatar'), function (req, res, next) {
  // req.file es el archivo del `avatar`
  // req.body contendrá los campos de texto, si los hubiera.
  // req.file es el nombre de tu archivo en el formulario anterior, en este caso 'uploaded_file'
  // req.body contendrá los campos de texto, si los hubiera.
  console.log('req.file \t', req.file);
  console.log('req.body \t', req.body);

  // res.send('termina');
  res.redirect('/');
});

module.exports = router;
