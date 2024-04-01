const express = require("express");
const router = express.Router();
const Dua = require("../models/dua");

// Define routes
router.get("/", async (req, res) => {
  try {
    const duas = await Dua.find();
    res.json(duas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const dua = new Dua({
    name: req.body.name,
    message: req.body.message,
  });

  try {
    const newDua = await dua.save();
    res.status(201).json(newDua);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
