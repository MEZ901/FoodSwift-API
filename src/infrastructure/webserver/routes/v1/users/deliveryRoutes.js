const express = require("express");
const deliveryRoutes = express.Router();

const DeliveryControllerImpl = require("../../../../../adapters/controllers/users/DeliveryControllerImpl");
const DeliveryServices = require("../../../../../adapters/services/users/DeliveryServices");

const deliveryController = new DeliveryControllerImpl(new DeliveryServices());

deliveryRoutes.get("/seed", deliveryController.seed);

module.exports = deliveryRoutes;
