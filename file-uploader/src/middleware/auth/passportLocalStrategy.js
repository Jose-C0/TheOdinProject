// const pool = require('../db/pool.js');
// const router = require("../routes/index.js");
// const session = require("express-session");
const passportLocalStrategy = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { PrismaClient } = require('../../db/generated/prisma_client');

const prisma = new PrismaClient();

passportLocalStrategy.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const { rows } = await prisma.user.findUnique({
        where: {
          email: username
        }
      });
      // await pool.query(
      //   'SELECT * FROM users WHERE username = $1',
      //   [username]
      // );
      const user = rows[0];
      console.log(user);

      if (!user) {
        return done(null, false, { message: 'Incorrect username' });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: 'Incorrect password' });
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

passportLocalStrategy.serializeUser((user, done) => {
  done(null, user.id);
});

passportLocalStrategy.deserializeUser(async (id, done) => {
  try {
    const { rows } = await prisma.user.findMany({
      where: {
        id: this.id
      }
    });

    // await pool.query('SELECT * FROM users WHERE id = $1', [
    //   id
    // ]);

    const user = rows[0];

    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passportLocalStrategy;
