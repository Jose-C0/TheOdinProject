const pool = require("../db/pool.js");
const bcrypt = require("bcrypt");
// const passportLocalStrategy = require("../middleware/passportLocalStrategy.js");
// const loginInController = require("../controllers/logInController.js");
// const LocalStrategy = require("passport-local").Strategy;
// const passport = require("passport");

async function get(req, res) {
  if (req.isUnauthenticated()) {
    res.redirect("/");
  } else {
    res.render("pages/new-msg");
  }
}

async function create(req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query(
      "insert into users (username, password, first_name, last_name) values ($1, $2, $3, $4)",
      [
        req.body.username,
        hashedPassword,
        req.body.first_name,
        req.body.last_name,
      ]
    );

    // AUTHENTICATE

    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }


}

module.exports = { getSignupForm, create };
