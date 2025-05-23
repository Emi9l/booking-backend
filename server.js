
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint för bokning
app.post("/api/book", (req, res) => {
  const booking = req.body;
  console.log("📥 Received booking:", booking);
  res.status(200).json({ message: "Booking received" });
});

// Starta servern
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
