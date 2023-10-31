module.exports = async ({
  token,
  newPassword,
  resetPasswordSchema,
  authServices,
  userRepository,
}) => {
  const validationErr = authServices.validateData(
    { token, newPassword },
    resetPasswordSchema
  );

  if (validationErr) return validationErr;

  const decodedToken = await authServices.verifyResetPasswordToken(token);

  if (decodedToken.status !== 200) return decodedToken;

  const { email } = decodedToken.payload;

  const user = await userRepository.findByEmail(email);

  if (!user)
    return {
      status: 404,
      message: "User not found",
    };

  const hashedPassword = await authServices.hashPassword(newPassword);

  const updatedUser = await userRepository.update(user.id, {
    password: hashedPassword,
  });

  if (!updatedUser)
    return {
      status: 500,
      message: "Internal server error",
    };

  return { status: 200, message: "Password updated successfully" };
};
