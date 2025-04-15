const express = require('express');

const indexController = require('../controllers/indexController.js');
const logInController = require('../controllers/logInController.js');
const logOutController = require('../controllers/logOutController.js');

const signUpController = require('../controllers/signUpController.js');

const mdlSignUp = require('../middleware/validation/signUpValidation.js');
const mdlLogIn = require('../middleware/validation/logInValidation.js');
const auth = require('../middleware/auth/passportLocalStrategy.js');
const flup = require('../middleware/file/upload.js');

const fileController = require('../middleware/file/fileUploadController.js');

const router = express.Router();

router.get('/', indexController.getIndex);
router.get('/values', indexController.quryWorkSpace);
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

// create
router.post('/file-upload', flup.processSingleFileUpload(), flup.handleFileUploadLogic);

// read
// router.get('/file-upload/:id', fileController.getAll);

// delete
router.delete('/file-upload/folder/delete/:id', fileController.deleteFolder);
// router.delete("/file-upload/file/delete/:id", fileController.deleteFile);
// router.update('/file-upload/folder/update/:id', fileController);
// router.update("/file-upload/file/update/:id", fileController);

// update
router.patch('/file-upload/folder/update/:id', fileController.updateFolder);

module.exports = router;
