const express = require("express");
const customerRoutes = express.Router();

const CustomerControllerImpl = require("../../../../../adapters/controllers/users/CustomerControllerImpl");
const CustomerServices = require("../../../../../adapters/services/users/CustomerServices");

const customerController = new CustomerControllerImpl(new CustomerServices());

customerRoutes.get("/seed", customerController.seed);

module.exports = customerRoutes;
