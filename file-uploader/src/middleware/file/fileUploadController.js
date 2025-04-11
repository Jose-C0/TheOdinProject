// const multer = require('multer');
// const processSingleFileUpload = require("../middleware/file/upload.js");
const { PrismaClient } = require('../../db/generated/prisma_client');
// const { processSingleFileUpload } = require('./upload.js');
// TODO: delete id where it is not necessary
// This file is to test api
// remove this file and create the controller in folder Controllers

const prisma = new PrismaClient();

async function getAll (req, res, next) {
  const allFiles = await prisma.file.findMany({
    select: {
      id: true,
      name: true,
      size: true,
      path: true,
      url: true,
      userId: true,
      folder: { select: { name: true } },
      // folderId: true,
      createdAt: true

    }
  }
  );

  const allFolders = await prisma.folder.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true

    }
  });

  // const uniqueFolder = await prisma.folder.findUnique({
  //   where: { id: paramsId }
  // });

  // const uniqueFiles = await prisma.file.findUnique({
  //   where: { id: paramsId }
  // });
  res.status(200).send(req.params.id);
  // res.status(200).send({ uniqueFiles, uniqueFolder /* allFolders, allFiles */ });
}

module.exports = { getAll };
