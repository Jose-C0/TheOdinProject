const db = require("../db/query.js");
const passportLocalStrategy = require("../middleware/passportLocalStrategy.js");

async function getLoginForm(req, res) {
  if (req.user !== undefined) res.redirect("/");
  const messages = await db.getAllmsg();
  if (req.isUnauthenticated()) {
    res.render("pages/log-in.ejs");
  } else {
    res.render("pages/index.ejs", { messages, user: req.user });
  }
}

function handleForm(req, res, next) {}

module.exports = { getLoginForm, handleForm, passportLocalStrategy };
