const express = require("express");
const customerRoutes = express.Router();
const CustomerControllerImpl = require("../../../../../adapters/controllers/users/CustomerControllerImpl");

customerRoutes.get("/seed", CustomerControllerImpl.seed);

module.exports = customerRoutes;
