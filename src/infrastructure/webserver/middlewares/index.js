const errorMiddleware = require("./errorMiddleware");
const notFoundMiddleware = require("./notFoundMiddleware");

const middlewares = [];
const errMiddlewares = [notFoundMiddleware, errorMiddleware];

module.exports = [middlewares, errMiddlewares];
