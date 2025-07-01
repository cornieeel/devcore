const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const fetch = require("node-fetch"); // Asigură-te că ai instalat node-fetch@2

router.post("/site-verification-request", async (req, res) => {
  const { userId, siteUrl, contactEmail, phone, verificationCode } = req.body;

  // Validare câmpuri obligatorii
  if (!userId || !siteUrl || !contactEmail || !verificationCode) {
    return res.status(400).json({ message: "Toate câmpurile obligatorii trebuie completate." });
  }

  try {
    // Verifică accesibilitatea site-ului și conținutul codului de verificare
    const response = await fetch(siteUrl);
    if (!response.ok) {
      return res.status(400).json({ message: "Nu s-a putut accesa site-ul." });
    }

    const html = await response.text();

    if (!html.includes(verificationCode)) {
      return res.status(400).json({ message: "Codul de verificare nu a fost găsit pe site." });
    }

    // Verifică dacă există deja o cerere pentru acest user și site
    const [existing] = await pool.query(
      "SELECT 1 FROM site_verifications WHERE user_id = ? AND site_url = ?",
      [userId, siteUrl]
    );

    if (existing.length > 0) {
      return res.status(400).json({ message: "Cerere de verificare există deja pentru acest site." });
    }

    // Inserează cererea în baza de date
    await pool.query(
      `INSERT INTO site_verifications 
      (user_id, site_url, contact_email, phone, verification_code, verified) 
      VALUES (?, ?, ?, ?, ?, ?)`,
      [userId, siteUrl, contactEmail, phone || null, verificationCode, false]
    );

    return res.json({ message: "Cererea a fost înregistrată. Vei fi notificat după verificare." });
  } catch (error) {
    console.error("Eroare la verificarea site-ului:", error);
    return res.status(500).json({ message: "Eroare server." });
  }
});

module.exports = router;
