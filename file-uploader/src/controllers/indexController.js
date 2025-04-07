
const { PrismaClient } = require('../db/generated/prisma_client');

const prisma = new PrismaClient();

async function getIndex (req, res) {
  const allfolders = await prisma.folder.findMany();
  const allfiles = await prisma.file.findMany();
  const myWorkSpace = await quryWorkSpace();

  // console.log(myWorkSpace);
  // res.render('pages/index.ejs');

  if (req.isUnauthenticated()) {
    res.render('pages/index.ejs', { myWorkSpace, allfolders, allfiles });
  } else {
    console.log(req);
    res.render('pages/index.ejs', { user: req.user });
  }
}

const quryWorkSpace = async () => {
  const filesById = await prisma.file.findMany({
    select: {
      id: true
    }
  }).id;

  const myWorkSpace = await prisma.folder.findMany({
    where: {
      id: filesById
    },
    select: {
      name: true,
      files: { select: { name: true } }
    }
  });

  return myWorkSpace.map(x => {
    return { name: x.name, files: x.files.map((item) => item.name) };
  });
  //  [
  //  { name: '/tmp/', files: [ [Object], [Object] ] },
  //  { name: '/temp/2', files: [] }
  //  ]
};
module.exports = { getIndex };
