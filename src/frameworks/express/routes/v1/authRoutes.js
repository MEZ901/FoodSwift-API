const express = require("express");
const authRouter = express.Router();

const authController = require("../../../../interfaces/controllers/authController");

authRouter.get("/register", authController.register);

module.exports = authRouter;
