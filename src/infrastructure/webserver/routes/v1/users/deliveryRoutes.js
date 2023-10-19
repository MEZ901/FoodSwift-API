const express = require("express");
const deliveryRoutes = express.Router();

const { deliveryController } = require("../../../../../../container");

deliveryRoutes.get("/seed", deliveryController.seed);

module.exports = deliveryRoutes;
