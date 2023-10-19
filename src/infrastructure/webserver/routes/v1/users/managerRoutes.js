const express = require("express");
const managerRoutes = express.Router();

const ManagerControllerImpl = require("../../../../../adapters/controllers/users/ManagerControllerImpl");
const ManagerServices = require("../../../../../adapters/services/users/ManagerServices");

const managerController = new ManagerControllerImpl(new ManagerServices());

managerRoutes.get("/seed", managerController.seed);

module.exports = managerRoutes;
