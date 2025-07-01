const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// Obține toate datele dashboardului pentru un utilizator
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const [websites] = await pool.query("SELECT * FROM websites WHERE user_id = ?", [userId]);
    const [traffic] = await pool.query("SELECT month, traffic FROM traffic_data WHERE user_id = ?", [userId]);
    const [revenue] = await pool.query("SELECT month, revenue FROM revenue_data WHERE user_id = ?", [userId]);
    const [activities] = await pool.query(
      "SELECT description FROM user_activity WHERE user_id = ? ORDER BY created_at DESC LIMIT 10",
      [userId]
    );

    // Dacă nu are niciun site/promovare, trimite 403
    if (websites.length === 0) {
      return res.status(403).json({ message: "Niciun site sau promovare găsit." });
    }

    const totalRevenue = revenue.reduce((acc, r) => acc + r.revenue, 0);
    const activeUsers = websites.length;
    const pendingTasks = 0; // poți adăuga logica pentru sarcini

    res.json({
      websites,
      traffic,
      revenue,
      recentActivities: activities.map((a) => a.description),
      totalRevenue,
      activeUsers,
      pendingTasks,
    });
  } catch (error) {
    console.error("Eroare la fetch dashboard:", error);
    res.status(500).json({ message: "Eroare server" });
  }
});

module.exports = router;
