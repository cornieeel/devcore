const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Configurare multer - folderul unde vor fi salvate imaginile
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // folder uploads în root-ul backend-ului
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Endpoint pentru upload imagine profil
router.post('/avatar', upload.single('avatar'), (req, res) => {
  if (!req.file) return res.status(400).send('Niciun fișier încărcat');

  const avatarUrl = `/uploads/${req.file.filename}`;

  // TODO: salvează avatarUrl în DB pentru utilizatorul conectat

  res.json({ message: 'Imagine încărcată cu succes!', avatarUrl });
});

module.exports = router;
