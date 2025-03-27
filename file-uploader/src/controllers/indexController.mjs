// const db = require("../db/query.js");
// import { PrismaClient } from "@prisma/client";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getIndex (req, res) {
  // const allUsers = await prisma.user.findMany();
  // const createUser = await prisma.create

  console.log(createUser);
  res.render("pages/index.ejs");
  /*
  if (req.isUnauthenticated()) {
    res.render("pages/index.ejs", { messages });
   } else {
    // console.log(req)
    res.render("pages/index.ejs", { user: req.user, messages });
   }
*/
}

export { getIndex };
