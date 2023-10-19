const express = require("express");
const bodyParser = require("body-parser");

class Server {
  constructor(PORT, routes = [], middlewares = [], errMiddlewares = []) {
    this.app = express();
    this.PORT = PORT;
    this.routes = routes;
    this.middlewares = middlewares;
    this.errMiddlewares = errMiddlewares;
  }

  configure() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });

    this.routes.forEach((route) => {
      this.app.use(`/api${route.path}`, route.router);
    });

    this.errMiddlewares.forEach((errMiddleware) => {
      this.app.use(errMiddleware);
    });
  }

  start() {
    this.configure();

    this.app.listen(this.PORT, () => {
      console.log(`----------------------------------------------`);
      console.log(`🚀 Server running on http://localhost:${this.PORT}/`);
      console.log(`----------------------------------------------`);
    });
  }
}

module.exports = Server;
