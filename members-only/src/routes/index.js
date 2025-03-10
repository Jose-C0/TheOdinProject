const express = require("express");

// const pool = require("../db/pool.js");
// const session = require("express-session");
//  const passport = require("passport");
//  const LocalStrategy = require("passport-local").Strategy;
// const bcrypt = require("bcrypt");
// const passport = require("../controllers/logInController.js");
const indexController = require("../controllers/indexController.js");
const loginInController = require("../controllers/logInController.js");
const logOutController = require("../controllers/logOutController.js");

const signUpController = require("../controllers/signUpController.js");

const router = express.Router();

router.get("/", indexController.getIndex);
router.get("/log-in", loginInController.getLoginForm);
router.get("/sign-up", signUpController.getSignupForm);
router.get("/log-out", logOutController.getLogout);

router.post("/sign-up", signUpController.create);

router.post(
  "/log-in",
  loginInController.passportLocalStrategy.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in",
  })
);

router.all("*", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(404).render("404");
  } else {
    res.redirect("/log-in");
  }
});

module.exports = router;
