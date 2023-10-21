const express = require("express");
const refreshTokenRouter = express.Router();

const { authController } = require("../../../../../../container");

refreshTokenRouter.post("/", authController.refreshToken);

module.exports = refreshTokenRouter;
