const pool = require("../db/pool.js");

const passportLocalStrategy = require("../middleware/passportLocalStrategy.js")

async function getLoginForm(req, res) {
  if (req.isUnauthenticated()) {
    res.render("pages/log-in.ejs");
  } else {
    res.render("pages/index.ejs", { user: req.user });
  }
}

function handleForm(req, res, next) {   
 
}
 

module.exports = { getLoginForm, handleForm, passportLocalStrategy };
