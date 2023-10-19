const express = require("express");
const managerRoutes = express.Router();
const ManagerControllerImpl = require("../../../../../adapters/controllers/users/ManagerControllerImpl");

managerRoutes.get("/seed", ManagerControllerImpl.seed);

module.exports = managerRoutes;
