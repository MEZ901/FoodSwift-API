module.exports = async ({
  userData,
  lgoinSchema,
  authServices,
  userRepository,
  userTokenRepository,
}) => {
  const validationErr = authServices.validateData(userData, lgoinSchema);
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

  const tokens = await authServices.generateTokens({
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    roles: user.roles.map((role) => role.name),
  });

  const userToken = await userTokenRepository.find({ userId: user._id });
  if (userToken.length > 0) {
    await userTokenRepository.update(userToken[0]._id, {
      refreshToken: tokens.refreshToken,
      updatedAt: new Date(),
    });
  } else {
    await userTokenRepository.create({
      userId: user._id,
      refreshToken: tokens.refreshToken,
    });
  }

  return {
    status: 200,
    message: "User logged in successfully",
    tokens,
  };
};
