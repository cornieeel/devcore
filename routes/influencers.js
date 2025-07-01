const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/', async (req, res) => {
  try {
    const [results] = await pool.query('SELECT * FROM influencers');
    res.json(results);
  } catch (error) {
    console.error('Eroare la fetch influencers:', error);
    res.status(500).json({ message: 'Eroare server' });
  }
});

module.exports = router;
