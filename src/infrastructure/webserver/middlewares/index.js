const ErrorMiddleware = require("./ErrorMiddleware");
const NotFoundMiddleware = require("./NotFoundMiddleware");

const middlewares = [];
const errMiddlewares = [NotFoundMiddleware, ErrorMiddleware];

module.exports = [middlewares, errMiddlewares];
