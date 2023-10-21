const errorMiddleware = require("./ErrorMiddleware");
const notFoundMiddleware = require("./notFoundMiddleware");

const middlewares = [];
const errMiddlewares = [notFoundMiddleware, errorMiddleware];

module.exports = [middlewares, errMiddlewares];
