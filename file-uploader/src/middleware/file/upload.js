const multer = require('multer');

// Multer configuration to save the files in the /tmp/ directory
const fileStorage = multer.diskStorage({
  destination: function (request, file, callback) {
    callback(null, '/tmp/');
  },
  filename: function (request, file, callback) {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

const fileUpload = multer({ storage: fileStorage });
// const upload = multer({ dest: '/tmp/' });

function processSingleFileUpload () {
  return fileUpload.single('ftmp');
}

function handleFileUploadLogic (req, res, next) {
  // req.file es el archivo del `ftmp`
  // req.body contendrá los campos de texto, si los hubiera.
  // req.file es el nombre de tu archivo en el formulario anterior, en este caso 'uploaded_file'
  // req.body contendrá los campos de texto, si los hubiera.

  if (!req.file) {
    return res.status(400).send('No file detected');
  }

  console.log('req.file \t', req.file);
  console.log('req.body \t', req.body);

  // res.send('termina');
  res.redirect('/');
}

module.exports = { handleFileUploadLogic, processSingleFileUpload };
