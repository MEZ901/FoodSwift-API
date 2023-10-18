const express = require("express");
const CustomerController = require("../../../../../interfaces/controllers/users/CustomerController");
const customerRoutes = express.Router();

customerRoutes.get("/seed", CustomerController.seed);

module.exports = customerRoutes;
