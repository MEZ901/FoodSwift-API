const express = require("express");
const customerRoutes = express.Router();

const { customerController } = require("../../../../../../container");
const authMiddleware = require("../../../middlewares/authMiddleware");

customerRoutes.get("/", authMiddleware, customerController.profile);
customerRoutes.get("/seed", customerController.seed);

module.exports = customerRoutes;
