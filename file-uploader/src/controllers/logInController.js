// const db = require("../db/query.js");

async function getLoginForm (req, res) {
  res.render('pages/log-in.ejs');
}

/*
async function getLoginForm(req, res) {
  if (req.user !== undefined) res.redirect("/");
  const messages = await db.getAllmsg();
  if (req.isUnauthenticated()) {
    res.render("pages/log-in.ejs");
  } else {
    res.render("pages/index.ejs", { messages, user: req.user });
  }
}
*/

module.exports = { getLoginForm };
