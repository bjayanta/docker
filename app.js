const express = require("express");
const app = express();

const PORT = 5000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to my Express server.");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

// Error route
app.get("/error", (req, res) => {
  throw new Error("Something went wrong!"); // Throw an error
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An error occurred: " + err.message);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
