require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware-uri globale - trebuie puse primele
app.use(cors());
app.use(express.json());

// Import rute
const siteVerificationRoutes = require("./routes/siteVerification");
const influencerRoutes = require('./routes/influencers');
const userRoutes = require('./routes/users');
const dashboardRoutes = require('./routes/dashboard');
const uploadRoutes = require('./routes/upload');

// Folosirea rutelor
app.use("/api/site-verification", siteVerificationRoutes);
app.use('/api/influencers', influencerRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/upload', uploadRoutes);

// Endpoint test
app.get('/', (req, res) => {
  res.send('Serverul funcționează.');
});

// Pornire server
const PORT = process.env.PORT || 5050;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});
