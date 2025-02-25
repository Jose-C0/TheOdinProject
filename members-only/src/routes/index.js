const express = require("express");
const pool = require("../db/pool.js");
// const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const loginInController = require("../controllers/logInController.js");
const indexController = require("../controllers/indexController.js");

const router = express.Router();

// router.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
// router.use(passport.session());
// router.use(express.urlencoded({ extended: false }));

router.get("/", indexController.getIndex );

router.get("/log-in", loginInController.getLoginForm );

router.get("/sign-up", (req, res) => res.render("sign-up-form"));

router.post("/sign-up", async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await pool.query(
      "insert into users (username, password) values ($1, $2)",
      [req.body.username, hashedPassword]
    );
    res.redirect("/");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

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

router.post(
    // TODO: LLEVAR A CONTROLLER
  "/log-in",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

router.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

router.all("*", (req, res) => {
  if (req.isAuthenticated()) {
    res.status(404).render("404");
  } else {
    res.redirect("/log-in");
  }
});
 
module.exports = router;