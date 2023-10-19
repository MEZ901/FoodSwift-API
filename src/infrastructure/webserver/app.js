// Required libraries and modules
const app = require("express")();
const bodyParser = require("body-parser");

// Required Middlewares
const NotFoundMiddleware = require("./middlewares/NotFoundMiddleware");
const ErrorMiddleware = require("./middlewares/ErrorMiddleware");

// Required routes
const v1Routes = require("./routes/v1");

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use("/api/v1", v1Routes);

// Error Middlewares
app.use(NotFoundMiddleware);
app.use(ErrorMiddleware);

module.exports = app;
