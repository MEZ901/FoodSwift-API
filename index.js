const Server = require("./src/infrastructure/webserver/Server");
const { PORT } = require("./src/infrastructure/config/environment");
const routes = require("./src/infrastructure/webserver/routes");
const [ middlewares, errMiddlewares] = require("./src/infrastructure/webserver/middlewares");

new Server(PORT, routes, middlewares, errMiddlewares).start();
