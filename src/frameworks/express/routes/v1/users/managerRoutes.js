const express = require("express");
const ManagerController = require("../../../../../adapters/controllers/users/ManagerController");
const managerRoutes = express.Router();

managerRoutes.get("/seed", ManagerController.seed);

module.exports = managerRoutes;
