const express = require("express");
const managerRoutes = express.Router();

const { managerController } = require("../../../../../../container");
const authMiddleware = require("../../../middlewares/authMiddleware");
const roleMiddleware = require("../../../middlewares/roleMiddleware");

managerRoutes.get(
  "/profile",
  authMiddleware,
  roleMiddleware("manager"),
  managerController.profile
);
managerRoutes.get("/seed", managerController.seed);

module.exports = managerRoutes;
