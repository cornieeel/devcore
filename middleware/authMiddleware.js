const jwt = require('jsonwebtoken');
const JWT_SECRET = 'secretulTauSuperSecret';

module.exports = function(req, res, next) {
  const token = req.header('Authorization')?.split(' ')[1]; // Bearer TOKEN
  if (!token) return res.status(401).json({ message: 'Nu ai token, acces interzis' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token invalid' });
  }
};
