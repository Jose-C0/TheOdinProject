const db = require("../db/query.js");

async function getIndex(req, res) {
  const messages = await db.getAllmsg();
 
  if (req.isUnauthenticated()) {
    res.render("pages/index.ejs", { messages });
  } else {
    res.render("pages/index.ejs", { user: req.user, messages });
  }

  // res.render("pages/index.ejs", { messages });
  //  res.render("pages/index.ejs", { user: req.user });

  // console.log(req.isUnauthenticated());
  // res.render("index.ejs", { user: req.user });
  //  console.log(req.isAuthenticated());
}

module.exports = { getIndex };
