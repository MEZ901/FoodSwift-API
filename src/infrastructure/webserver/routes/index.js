const v1Routes = require("./v1");

const routes = [
  {
    path: "/v1",
    router: v1Routes,
  },
];

module.exports = routes;
