const express = require("express");
const DeliveryController = require("../../../../../interfaces/controllers/users/DeliveryController");
const deliveryRoutes = express.Router();

deliveryRoutes.get("/seed", DeliveryController.seed);

module.exports = deliveryRoutes;
