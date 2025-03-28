const express = require("express");
const morgan = require("morgan");

const app = express();
const PORT = 3000;

// Middleware for logging requests
app.use(morgan("dev"));

// Homepage route
app.get("/", (req, res) => {
  res.send("Welcome to Full Stack Development");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a simple Express.js application.");
});

// Start server
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});