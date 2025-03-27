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

/*
async function comfirmSecretAccess(req, res) {

  async (req, res, next) => {
    const getSecret = await db.getSecretCode(req.body.secretCode);
    console.log("req.body.secretCode!!!!", req.body.secretCode);
    console.log("getSecret!!!!", getSecret);

    // if (req.body.secretCode !== getSecret) 

    // if (req.body.secretCode !== getSecret) res.redirect("/member-join");
    //next();
  }
  

  if (!req.user.is_member) {
    await db.updateStatusMember(req.user.id, req.body.secretCode);
  }

  res.redirect("/");
  

 
  console.log(req.user.is_member);
    
  if (req.user.is_member) {
    
  
  console.log("funciona")
  }
  else {
    res.send("Incorrect")
  }
     
}
*/

module.exports = { getMemberJoinForm, confirmSecretAccess };
