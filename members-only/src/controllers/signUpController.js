const pool = require("../db/pool.js");
const bcrypt = require("bcrypt");

async function getSignupForm(req, res) {
  if (req.isUnauthenticated()) {
    res.render("pages/sign-up-form.ejs");
  } else {
    res.redirect("/");
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
    res.redirect("/log-in");
  } catch (error) {
    console.error(error);
    next(error);
  }


}

module.exports = { getSignupForm, create };
