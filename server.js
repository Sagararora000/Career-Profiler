const express = require("express");

const app = express();
const port = 4000;

// Test route
app.get("/", (req, res) => {
  res.send("Hello User");
});

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
