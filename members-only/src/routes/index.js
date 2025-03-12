const express = require("express");

const indexController = require("../controllers/indexController.js");
const loginInController = require("../controllers/logInController.js");
const logOutController = require("../controllers/logOutController.js");
const memberJoinController = require("../controllers/memberJoinController.js");
const signUpController = require("../controllers/signUpController.js");
const createMsgController = require("../controllers/createMsgController.js");

const middlewareSignUpValidation = require("../middleware/validation/signUpValidation.js");
const middlewareCreateMsgValidation = require("../middleware/validation/createMsgValidation.js");

const router = express.Router();

router.get("/", indexController.getIndex);
router.get("/log-in", loginInController.getLoginForm);
router.get("/sign-up", signUpController.getSignupForm);
router.get("/log-out", logOutController.getLogout);
router.get("/member-join", memberJoinController.getMemberJoinForm);
router.get("/create-msg", createMsgController.getCreateMsgForm );


router.post(
  "/sign-up",
  middlewareSignUpValidation.validateUser(),
  signUpController.create
);

router.post(
  "/log-in",
  loginInController.passportLocalStrategy.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in",
  })
);

router.post("/member-join", memberJoinController.confirmSecretAccess);

router.post("/create-msg", middlewareCreateMsgValidation.validateMsg(), createMsgController.create);

router.all("*", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(404).render("404");
  } else {
    res.redirect("/log-in");
  }
});

module.exports = router;
