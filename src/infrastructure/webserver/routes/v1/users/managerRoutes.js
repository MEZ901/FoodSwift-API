const express = require("express");
const managerRoutes = express.Router();

const { managerController } = require("../../../../../../container");

managerRoutes.get("/", managerController.profile);
managerRoutes.get("/seed", managerController.seed);

module.exports = managerRoutes;
