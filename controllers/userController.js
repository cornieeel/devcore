const userModel = require('../models/userModel');

exports.getAllUsers = (req, res) => {
  userModel.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: 'Eroare la baza de date' });
    } else {
      res.json(results);
    }
  });
};
