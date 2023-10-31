const express = require("express");
const authRouter = express.Router();

const { authController } = require("../../../../../../container");

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);
authRouter.post("/refresh-token", authController.refreshToken);
authRouter.post("/verify-email", authController.verifyEmail);
authRouter.post(
  "/send-reset-password-email",
  authController.sendResetPasswordEmail
);
authRouter.post("/reset-password", authController.resetPassword);
authRouter.post("/logout", authController.logout);

module.exports = authRouter;
