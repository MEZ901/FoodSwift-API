const express = require("express");
const authRouter = express.Router();

const AuthController = require("../../../../../interfaces/controllers/auth/AuthController");

authRouter.get("/register", AuthController.register);

module.exports = authRouter;
