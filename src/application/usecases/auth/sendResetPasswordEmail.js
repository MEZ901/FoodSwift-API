module.exports = async ({ email, authServices, emailServices }) => {
  const resetPasswordToken = await authServices.generateResetPasswordToken({
    email,
  });

  const emailSent = await emailServices.sendResetPasswordEmail(
    email,
    resetPasswordToken
  );

  if (!emailSent) {
    return {
      status: 500,
      message: "Internal server error",
    };
  }

  return {
    status: 200,
    message: "Email sent successfully",
  };
};
