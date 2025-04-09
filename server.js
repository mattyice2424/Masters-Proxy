import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/masters", async (req, res) => {
  try {
    const response = await fetch("https://www.masters.com/en_US/scores/feeds/scores.json", {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", detail: err.toString() });
  }
});

app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));
