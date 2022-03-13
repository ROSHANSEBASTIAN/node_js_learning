const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.json("<h1>Home page</h1>");
});

// get method with a JSON response
app.get("/contact", (req, res) => {
  res.json("<h1>Contact page</h1>");
});

// this is for 404 handling
app.get("*", (req, res) => {
  res.status(404); // seting the status code as 404
  res.send("404");
});

app.listen(PORT, () => console.log(`server running in port ${PORT}`));
