const express = require("express");
const cors = require("cors"); // Import cors middleware
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const duaRouter = require("./routes/duas");

// Use cors middleware to enable CORS
app.use(
  cors({
    origin: "https://dua.vercel.app",
  })
);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Define middleware
app.use(express.json());

// Define routes
app.use("/api/duas", duaRouter);

// Define default route
app.get("/", (req, res) => {
  res.send("Welcome to the Dua API!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.export = app;
