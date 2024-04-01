const mongoose = require("mongoose");

const duaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Dua = mongoose.model("Dua", duaSchema);

module.exports = Dua;
