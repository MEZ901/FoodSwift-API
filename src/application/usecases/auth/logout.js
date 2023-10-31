module.exports = async ({
  refreshToken,
  refreshTokenSchema,
  authServices,
  userTokenRepository,
}) => {
  const validationError = authServices.validateData(
    { refreshToken },
    refreshTokenSchema
  );
  if (validationError) return validationError;

  const decodedToken = await authServices.verifyRefreshToken(refreshToken);
  if (!decodedToken) {
    return {
      status: 401,
      validationError: {
        field: "refreshToken",
        message: "Refresh token is invalid",
      },
    };
  }

  const userToken = await userTokenRepository.find({ refreshToken });
  if (userToken.length === 0) {
    return {
      status: 404,
      validationError: {
        field: "refreshToken",
        message: "Refresh token does not exist",
      },
    };
  }

  await userTokenRepository.softDelete(userToken[0]._id);

  return {
    status: 200,
    message: "Logout successful",
  };
};
