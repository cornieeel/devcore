const db = require('../config/db');

exports.getAll = (callback) => {
  db.query('SELECT * FROM users', callback);
};
