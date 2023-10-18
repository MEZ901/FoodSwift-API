const express = require("express");
const DeliveryController = require("../../../../../adapters/controllers/users/DeliveryController");
const deliveryRoutes = express.Router();

deliveryRoutes.get("/seed", DeliveryController.seed);

module.exports = deliveryRoutes;
