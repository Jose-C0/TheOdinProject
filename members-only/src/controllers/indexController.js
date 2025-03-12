const db = require("../db/query.js");

async function getIndex(req, res) {
  const messages = await db.getAllmsg();
 
  if (req.isUnauthenticated()) {
    res.render("pages/index.ejs", { messages });
  } else {
    // console.log(req)
    res.render("pages/index.ejs", { user: req.user, messages });
  }

}

module.exports = { getIndex };
