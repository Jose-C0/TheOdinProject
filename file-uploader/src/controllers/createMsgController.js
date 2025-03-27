const db = require("../db/query");
const bcrypt = require("bcrypt");

async function getCreateMsgForm(req, res) {
  if (req.isUnauthenticated()) {
    res.redirect("/");
  } else {
    res.render("pages/create-msg.ejs");
  }
}

async function create(req, res, next) {
  try {
    const insert = await db.insertMsg(
      req.user.id,
      req.body.title,
      req.body.description
    );

    insert

    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { getCreateMsgForm, create };
