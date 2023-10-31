const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

class Server {
  constructor(PORT, routes, middlewares, errMiddlewares) {
    this.app = express();
    this.PORT = PORT;
    this.routes = routes;
    this.middlewares = middlewares;
    this.errMiddlewares = errMiddlewares;
  }

  configure = () => {
    this.app.use(cookieParser());
    this.app.use(express.json());

    this.app.use(
      cors({
        origin: "http://localhost:3000",
        credentials: true,
      })
    );

    this.middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });

    this.routes.forEach((route) => {
      this.app.use(`/api${route.path}`, route.router);
    });

    this.errMiddlewares.forEach((errMiddleware) => {
      this.app.use(errMiddleware);
    });
  };

  start = () => {
    this.configure();

    this.app.listen(this.PORT, () => {
      console.log(`-----------------------------------------------`);
      console.log(`| 🚀 Server running on http://localhost:${this.PORT}/ |`);
      console.log(`-----------------------------------------------`);
    });
  };
}

module.exports = Server;
