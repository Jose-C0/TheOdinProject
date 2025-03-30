const express = require('express');

const indexController = require('../controllers/indexController.js');
const loginController = require('../controllers/logInController.js');

const router = express.Router();

router.get('/', indexController.getIndex);

router.get('/log-in', loginController.getLoginForm);

module.exports = router;
