// const multer = require('multer');
// const processSingleFileUpload = require("../middleware/file/upload.js");
const flup = require('./upload');
const { PrismaClient } = require('../../db/generated/prisma_client');

// TODO: delete id where it is not necessary
// This file is to test api
// remove this file and create the controller in folder Controllers

const prisma = new PrismaClient();

async function getAll (req, res) {
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
  });

  const allFolders = await prisma.folder.findMany({
    select: {
      id: true,
      name: true,
      createdAt: true,
      updatedAt: true
    }
  });

  console.log(req.params.id);
  // res.status(200).send(req.params.id);
  res.status(200).send();

  // res.status(200).send({ uniqueFiles, uniqueFolder /* allFolders, allFiles */ });
}

async function createFile (req, res) {
  await prisma.file.create({
    data: {
      name: req.file.filename,
      size: req.file.size,
      path: req.file.path,
      url: req.file.destination + req.file.filename,
      folderId: 1,
      userId: 1 // TODO: USAR --> req.user.id
    }
  });

  res.status(200).send('ok');
}

async function createFolder (req, res) {
  await prisma.folder.create({
    data: {
      name: req.file

    }
  });

  res.status(200).send('ok');
}

async function deleteFolder (req, res) {
  await prisma.folder.delete({
    where: { id: parseInt(req.params.id) }
  });
  res.status(200).send('ok');
}

async function deleteFiles (req, res) {
  await prisma.file.delete({
    where: { id: parseInt(req.params.id) }
  });
}

async function updateFiles (req, res) {
  await prisma.file.update({
    where: { id: parseInt(req.params.id) },
    data: { name: 'make change' }
  });
  return res.status(200).send('ok');
}

async function updateFolder (req, res) {
  await prisma.folder.update({
    where: { id: parseInt(req.params.id) },
    data: { name: 'make change' }
  });

  return res.status(200).send('ok');
}

module.exports = {
  getAll,
  createFile,
  createFolder,
  updateFiles,
  updateFolder,
  deleteFiles,
  deleteFolder
};
