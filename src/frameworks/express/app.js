const app = require("express")();
const bodyParser = require("body-parser");
const ErrorHandler = require("./handlers/ErrorHandler");
const NotFoundHandler = require("./handlers/NotFoundHandler");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use(NotFoundHandler);
app.use(ErrorHandler);

module.exports = app;
