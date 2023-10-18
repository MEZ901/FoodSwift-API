const express = require("express");
const CustomerController = require("../../../../../adapters/controllers/users/CustomerController");
const customerRoutes = express.Router();

customerRoutes.get("/seed", CustomerController.seed);

module.exports = customerRoutes;
