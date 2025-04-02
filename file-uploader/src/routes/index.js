const express = require('express');

const indexController = require('../controllers/indexController.js');
const loginController = require('../controllers/logInController.js');
const signController =
const auth = require('../middleware/auth/passportLocalStrategy.js');

const router = express.Router();

router.get('/', indexController.getIndex);

router.get('/log-in', loginController.getLoginForm);
router.get('/sign-up', async (req, res) => { res.render('pages/sign-up.ejs'); });

router.post('/sign-up', async (req, res) => {
  res.render('pages/sign-up.ejs');
});

// router.post(
//   '/log-in',
//   auth.Authenticator('local', {
//     successRedirect: '/',
//     failureRedirect: '/log-in'
//   })
// );

(module.exports = router);
