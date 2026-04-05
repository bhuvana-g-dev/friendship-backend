require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= MONGODB CONNECTION ================= */
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB Connected ✅");

  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.log("MongoDB ERROR ❌");
  console.log(err);
});

/* ================= SCHEMA ================= */
const cardSchema = new mongoose.Schema({
  to: String,
  msg: String,
  from: String,
  left: Number,
  right: Number
});

const Card = mongoose.model("Card", cardSchema);

/* ================= CREATE CARD ================= */
app.post("/create", async (req, res) => {
  try {
    const newCard = new Card({
      to: req.body.to,
      msg: req.body.msg,
      from: req.body.from,
      left: req.body.left,
      right: req.body.right
    });

    const savedCard = await newCard.save();

    res.json({
      link: `https://friendship-card-ry3y.vercel.app/index.html?id=${savedCard._id}`
    });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving card ❌");
  }
});

/* ================= GET CARD ================= */
app.get("/card/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.send("Card not found ❌");
    }

    res.json(card);

  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching card ❌");
  }
});

/* ================= ROOT ================= */
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});