const bcrypt = require('bcrypt');
const { PrismaClient } = require('../db/generated/prisma_client');

const prisma = new PrismaClient();

async function getSignupForm (req, res) {
  if (req.isUnauthenticated()) {
    res.render('pages/sign-up.ejs');
  } else {
    res.redirect('/');
  }
}

async function create (req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await prisma.user.create({
      data: {
        email: req.body.email,
        name: req.body.name,
        password: hashedPassword
      }
    });

    // AUTHENTICATE
    // res.redirect('/log-in');
  } catch (error) {
    console.error(error);
    next(error);
  }
}

module.exports = { getSignupForm, create };
