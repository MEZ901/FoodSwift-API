module.exports = async ({
  refreshToken,
  refreshTokenSchema,
  authServices,
  userRepository,
  userTokenRepository,
}) => {
  const validationErr = authServices.validateData(
    { refreshToken },
    refreshTokenSchema
  );
  if (validationErr) return validationErr;

  const userToken = await userTokenRepository.find({
    refreshToken,
  });
  if (userToken.length === 0) {
    return {
      status: 404,
      validationError: {
        field: "refreshToken",
        message: "Refresh token does not exist",
      },
    };
  }

  const { status, ...rest } = await authServices.verifyRefreshToken(
    refreshToken
  );

  if (status !== 200) {
    return {
      status,
      ...rest,
    };
  }

  const user = await userRepository.findById(rest.payload.id);
  if (!user) {
    return {
      status: 400,
      validationError: {
        field: "userId",
        message: "User does not exist",
      },
    };
  }

  const accessToken = await authServices.generateAccessToken({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    roles: user.roles.map((role) => role.name),
    isVerified: user.isVerified,
    isBanned: user.isBanned,
  });

  return {
    status: 200,
    message: "Access token has been refreshed",
    accessToken,
  };
};
