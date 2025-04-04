const { PrismaClient } = require('../db/generated/prisma_client');

const prisma = new PrismaClient();

async function getIndex (req, res) {
  // const manyUser = await prisma.user.findMany();
  // console.log(manyUser);
  // res.render('pages/index.ejs');

  if (req.isUnauthenticated()) {
    res.render('pages/index.ejs'/*, { messages } */);
  } else {
    console.log(req);
    res.render('pages/index.ejs', { user: req.user });
  }
}

module.exports = { getIndex };
