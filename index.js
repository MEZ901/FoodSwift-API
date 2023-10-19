const Server = require("./src/infrastructure/webserver/Server");
const { PORT } = require("./src/infrastructure/config/environment");
const routes = require("./src/infrastructure/webserver/routes");
const [
  middlewares,
  errMiddlewares,
] = require("./src/infrastructure/webserver/middlewares");

const webserver = new Server(PORT, routes, middlewares, errMiddlewares);

webserver.start();
