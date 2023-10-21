module.exports = async ({
  userData,
  loginSchema,
  authServices,
  userRepository,
  userTokenRepository,
}) => {
  const validationErr = authServices.validateData(userData, loginSchema);
  if (validationErr) return validationErr;

  const user = await userRepository.findByEmail(userData.email);
  if (!user) {
    return {
      status: 400,
      validationError: {
        field: "email",
        message: "Email does not exist",
      },
    };
  }

  const isPasswordValid = await authServices.comparePassword(
    userData.password,
    user.password
  );
  if (!isPasswordValid) {
    return {
      status: 400,
      validationError: {
        field: "password",
        message: "Password is incorrect",
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

  const refreshToken = await authServices.generateRefreshToken({
    id: user._id,
  });

  const userToken = await userTokenRepository.find({ userId: user._id });
  if (userToken.length > 0) {
    await userTokenRepository.update(userToken[0]._id, {
      refreshToken,
      updatedAt: new Date(),
    });
  } else {
    await userTokenRepository.create({
      userId: user._id,
      refreshToken,
    });
  }

  return {
    status: 200,
    message: "User logged in successfully",
    jwt: {
      accessToken,
      refreshToken,
    },
  };
};
