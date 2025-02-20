const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors()); // Enable CORS

// Function to extract JSON object from script tag
function extractPublinkData(html) {
  const match = html.match(/var publinkData = (\{.*?\});/s);
  if (match) {
    try {
      return JSON.parse(match[1].replace(/\\/g, ""));
    } catch (error) {
      console.error("Error parsing publinkData JSON:", error);
    }
  }
  return null;
}

app.get("/api", async (req, res) => {
  const fileUrl = req.query.url;
  if (!fileUrl) {
    return res.status(400).json({ error: "Missing 'url' parameter." });
  }
  
  try {
    const response = await axios.get(fileUrl, {
      headers: {
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0",
        "Referer": "https://www.google.com/",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "DNT": "1",
        "X-Forwarded-For": req.ip // Pass user IP to pCloud
      },
      responseType: "text"
    });
    const publinkData = extractPublinkData(response.data);
    
    if (publinkData && publinkData.downloadlink && publinkData.metadata) {
      return res.json({
        directLink: publinkData.downloadlink,
        fileDetails: publinkData
      });
    } else {
      return res.status(500).json({ error: "Failed to extract file details." });
    }
  } catch (error) {
    console.error("Error fetching file details:", error);
    return res.status(500).json({ error: "Error fetching file details." });
  }
});

app.get("/download", async (req, res) => {
  const fileUrl = req.query.url;
  if (!fileUrl) {
    return res.status(400).send("Missing 'url' parameter.");
  }
  
  try {
    const response = await axios.get(fileUrl, {
      headers: {
        "User-Agent": req.headers["user-agent"] || "Mozilla/5.0",
        "Referer": "https://www.google.com/",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "DNT": "1",
        "X-Forwarded-For": req.ip // Pass user IP to pCloud
      },
      responseType: "text"
    });
    const publinkData = extractPublinkData(response.data);
    
    if (publinkData && publinkData.downloadlink) {
      return res.redirect(publinkData.downloadlink);
    } else {
      return res.status(500).send("Failed to extract direct download link.");
    }
  } catch (error) {
    console.error("Error fetching file details:", error);
    return res.status(500).send("Error fetching file details.");
  }
});

module.exports = app;
