const db = require("../db/query.js");
// const passportLocalStrategy = require("../middleware/passportLocalStrategy.js");

async function getMemberJoinForm(req, res) {

  if (req.isUnauthenticated() || req.user.is_member) {
    res.redirect("/");
  } else {
    res.render("pages/memberJoin.ejs");
  }

}

async function confirmSecretAccess(req, res) {
  try {
    const getSecret = await db.getSecretCode(req.body.secretCode);

    //console.log("req.body.secretCode!!!!", req.body.secretCode);
    //console.log("getSecret!!!!", getSecret);

    
    if (!req.user.is_member) {
      await db.updateStatusMember(req.user.id, req.body.secretCode);
    }
    
    if (req.body.secretCode !== getSecret) {
      return res.render("pages/memberJoin.ejs", {
        incorrect: "secret code incorrect!!!!",
      });
    }
    
    res.redirect("/");

  } catch (error) {
    console.error("Error in confirmSecretAccess:", error);
    res.status(500).send("Internal Server Error");
  }
}


module.exports = { getMemberJoinForm, confirmSecretAccess };
