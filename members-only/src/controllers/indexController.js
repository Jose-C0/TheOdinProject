async function getIndex(req, res) {
  /*
  if (req.isUnauthenticated()) {
    res.render("pages/log-in.ejs")
  } else {
    res.render("pages/index.ejs", {user: req.user});
  }
  */
 res.render("pages/index.ejs", { user: req.user });
 // console.log(req.isUnauthenticated());
 // res.render("index.ejs", { user: req.user });
 //  console.log(req.isAuthenticated());
}

module.exports = { getIndex };
