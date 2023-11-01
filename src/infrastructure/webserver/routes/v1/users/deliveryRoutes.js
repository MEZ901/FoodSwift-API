const express = require("express");
const deliveryRoutes = express.Router();

const { deliveryController } = require("../../../../../../container");
const authMiddleware = require("../../../middlewares/authMiddleware");
const roleMiddleware = require("../../../middlewares/roleMiddleware");

deliveryRoutes.get(
  "/profile",
  authMiddleware,
  roleMiddleware("delivery"),
  deliveryController.profile
);
deliveryRoutes.get("/seed", deliveryController.seed);

module.exports = deliveryRoutes;
