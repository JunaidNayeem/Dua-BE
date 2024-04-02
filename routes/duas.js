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

router.delete("/:id", async (req, res) => {
  try {
    const duaId = req.params.id;
    await Dua.findByIdAndRemove(duaId);
    res.status(200).json({ message: "Dua marked as read successfully" });
  } catch (error) {
    console.error("Error marking dua as read:", error);
    res.status(500).json({ error: "Failed to mark dua as read" });
  }
});

module.exports = router;
