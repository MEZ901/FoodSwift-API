const express = require("express");
const customerRoutes = express.Router();

const { customerController } = require("../../../../../../container");

customerRoutes.get("/", customerController.profile);
customerRoutes.get("/seed", customerController.seed);

module.exports = customerRoutes;
