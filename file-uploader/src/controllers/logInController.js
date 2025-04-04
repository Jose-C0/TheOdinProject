// const db = require("../db/query.js");
/*
async function getLoginForm (req, res) {
  res.render('pages/log-in.ejs');
}
*/

async function getLoginForm (req, res) {
  if (req.user !== undefined) res.redirect('/');
  // const messages = await db.getAllmsg();
  if (req.isUnauthenticated()) {
    res.render('pages/log-in.ejs');
  } else {
    res.render('pages/index.ejs', { user: req.user });
  }
}

/*
  loginInController.passportLocalStrategy.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log-in",
  });

*/
module.exports = { getLoginForm };
