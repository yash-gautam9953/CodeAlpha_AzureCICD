const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from CodeAlpha Azure CI/CD 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    service: "CodeAlpha Azure CI/CD"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
