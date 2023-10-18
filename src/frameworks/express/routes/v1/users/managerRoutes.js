const express = require("express");
const ManagerController = require("../../../../../interfaces/controllers/users/ManagerController");
const managerRoutes = express.Router();

managerRoutes.get("/seed", ManagerController.seed);

module.exports = managerRoutes;
