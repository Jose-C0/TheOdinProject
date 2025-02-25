const pool = require("../db/pool.js");

// const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
 const router = require("../routes/index.js");

async function getLoginForm(req, res) {
  if (req.isUnauthenticated()) {
    res.render("pages/log-in.ejs");
  } else {
    res.render("pages/index.ejs", { user: req.user });
  }
}

// TODO: HANDLE LOGIN
// router.use(express.urlencoded({ extended: false }));
/*
function handle (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const { rows } = await pool.query(
          "SELECT * FROM users WHERE username = $1",
          [username]
        );
        const user = rows[0];

        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          // passwords do not match!
          return done(null, false, { message: "Incorrect password" });
        }

        // if (user.password !== password) {
        //   return done(null, false, { message: "Incorrect password" });
        // }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
        id,
      ]);
      const user = rows[0];

      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/",
})
}
*/
module.exports = { getLoginForm  };
