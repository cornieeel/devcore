const db = require('../server'); // sau calea corectă către conexiunea ta db
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

const JWT_SECRET = 'secretulTauSuperSecret'; // folosește .env în real

// Register user
exports.registerUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password } = req.body;

  // Verificăm dacă userul există
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Eroare DB' });

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email deja folosit' });
    }

    // Criptăm parola
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Inserăm userul nou
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword], (err, results) => {
        if (err) return res.status(500).json({ message: 'Eroare DB' });

        res.status(201).json({ message: 'User creat cu succes' });
      });
  });
};

// Login user
exports.loginUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ message: 'Eroare DB' });

    if (results.length === 0) {
      return res.status(400).json({ message: 'Email sau parola incorectă' });
    }

    const user = results[0];

    // Verificăm parola
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Email sau parola incorectă' });
    }

    // Generăm token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  });
};

// Get profile
exports.getProfile = (req, res) => {
  const userId = req.user.id;

  db.query('SELECT id, username, email, created_at FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Eroare DB' });

    if (results.length === 0) return res.status(404).json({ message: 'User nu exista' });

    res.json(results[0]);
  });
};
