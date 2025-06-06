const express = require("express");
const app = express();

const PORT = 5000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello World! Welcome to my Express server.");
});

// About route
app.get("/about", (req, res) => {
  res.send(
    "This is the About page. I am Jayanta Biswas, a software developer from Bangladesh."
  );
});

// JSON data route
app.get("/data", (req, res) => {
  res.json([
    { id: 1, name: "John Doe", age: 30 },
    { id: 2, name: "Jayanta Biswas", age: 34 },
    { id: 3, name: "Jane Smith", age: 28 },
    { id: 4, name: "Alice Johnson", age: 25 },
    { id: 5, name: "Bob Brown", age: 40 },
    { id: 6, name: "Charlie Davis", age: 72 },
    { id: 7, name: "Diana Prince", age: 33 },
    { id: 8, name: "Eve Green", age: 29 },
    { id: 9, name: "Frank Miller", age: 55 },
    { id: 10, name: "Eve Green", age: 29 },
    { id: 11, name: "Frank Miller", age: 55 },
  ]);
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
