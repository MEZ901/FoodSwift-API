// Required libraries and modules
const app = require("express")();
const bodyParser = require("body-parser");

// Required handlers
const ErrorHandler = require("./handlers/ErrorHandler");
const NotFoundHandler = require("./handlers/NotFoundHandler");

// Required routes
const v1Routes = require("./routes/v1");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/v1", v1Routes);

// Handlers
app.use(NotFoundHandler);
app.use(ErrorHandler);

module.exports = app;
