const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // vom crea un fișier db.js cu conexiunea la DB

const JWT_SECRET = process.env.JWT_SECRET || 'secretkey123'; // pune ceva secret în .env

// SIGNUP
router.post('/signup', async (req, res) => {
  const { username, email, password, fullName } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Completează toate câmpurile obligatorii.' });
  }

  try {
    // Verifică dacă utilizatorul există deja
    const [rows] = await db.execute('SELECT id FROM users WHERE username = ? OR email = ?', [username, email]);
    if (rows.length > 0) {
      return res.status(409).json({ message: 'Username sau email deja folosit.' });
    }

    // Hashează parola
    const hashedPassword = await bcrypt.hash(password, 10);

    // Introdu utilizatorul în DB
    await db.execute(
      'INSERT INTO users (username, email, password, fullName) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, fullName]
    );

    res.status(201).json({ message: 'Cont creat cu succes!' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Eroare la server.' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Completează toate câmpurile.' });
  }

  try {
    // Caută utilizatorul după username
    const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Username sau parolă incorectă.' });
    }

    const user = rows[0];

    // Compară parola cu hash-ul
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ message: 'Username sau parolă incorectă.' });
    }

    // Creează token JWT
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ message: 'Autentificare reușită', token, user: { username: user.username, email: user.email, fullName: user.fullName } });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Eroare la server.' });
  }
});

module.exports = router;
