const express = require("express");
const customerRoutes = express.Router();

const { customerController } = require("../../../../../../container");
const authMiddleware = require("../../../middlewares/authMiddleware");
const roleMiddleware = require("../../../middlewares/roleMiddleware");

customerRoutes.get(
  "/profile",
  authMiddleware,
  roleMiddleware("customer"),
  customerController.profile
);
customerRoutes.get("/seed", customerController.seed);

module.exports = customerRoutes;
