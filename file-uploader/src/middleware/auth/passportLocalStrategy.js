const passportLocalStrategy = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const bcrypt = require('bcrypt');

const { PrismaClient } = require('../../db/generated/prisma_client');

const prisma = new PrismaClient();

passportLocalStrategy.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const rows = await prisma.user.findFirst({
        // TODO: .findUnique({
        where: {
          name: username
        }
      });

      const user = rows;
      // console.log(rows.id);
      // console.log('user', user);
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
    const rows = await prisma.user.findUnique({
      where: {
        id
      }
    });

    const user = rows;

    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = { passportLocalStrategy };
