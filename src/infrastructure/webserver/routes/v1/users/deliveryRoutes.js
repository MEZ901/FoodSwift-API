const express = require("express");
const deliveryRoutes = express.Router();
const DeliveryControllerImpl = require("../../../../../adapters/controllers/users/DeliveryControllerImpl");

deliveryRoutes.get("/seed", DeliveryControllerImpl.seed);

module.exports = deliveryRoutes;
