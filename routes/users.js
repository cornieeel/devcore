const express = require('express');
const router = express.Router();
const pool = require('../config/db');
const bcrypt = require('bcryptjs');

// Signup - înregistrare utilizator
router.post('/signup', async (req, res) => {
  console.log('BODY:', req.body);
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii.' });
  }

  try {
    const [existingUser] = await pool.query('SELECT id FROM users WHERE email = ?', [email]);
    if (existingUser.length > 0) {
      return res.status(400).json({ error: 'Email deja folosit.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );

    // Returnează datele nou creatului utilizator (ca să le punem în localStorage)
    const [rows] = await pool.query('SELECT id, name, email FROM users WHERE email = ?', [email]);
    const user = rows[0];

    res.status(201).json({ message: 'Utilizator creat cu succes.', user });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ error: 'Eroare server.' });
  }
});

// Login - autentificare utilizator
router.post('/login', async (req, res) => {
  console.log('Login BODY:', req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Toate câmpurile sunt obligatorii.' });
  }

  try {
    const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(400).json({ error: 'Email sau parola incorectă.' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Email sau parola incorectă.' });
    }

    res.json({
      message: "Autentificare reușită",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ error: 'Eroare server.' });
  }
});

module.exports = router;
