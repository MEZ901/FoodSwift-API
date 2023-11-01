const express = require("express");
const deliveryRoutes = express.Router();

const { deliveryController } = require("../../../../../../container");
const authMiddleware = require("../../../middlewares/authMiddleware");
const roleMiddleware = require("../../../middlewares/roleMiddleware");
const verifiedMiddleware = require("../../../middlewares/verifiedMiddleware");

deliveryRoutes.get(
  "/profile",
  authMiddleware,
  roleMiddleware("delivery"),
  verifiedMiddleware,
  deliveryController.profile
);
deliveryRoutes.get("/seed", deliveryController.seed);

module.exports = deliveryRoutes;
