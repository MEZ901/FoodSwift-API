const app = require("express")();

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Page does not exist",
  });
});

module.exports = app;
