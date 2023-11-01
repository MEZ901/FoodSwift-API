module.exports = async ({
  userData,
  registerSchema,
  authServices,
  emailServices,
  userRepository,
  userTokenRepository,
}) => {
  userData.roleNames = ["customer"];

  const validationErr = authServices.validateData(userData, registerSchema);
  if (validationErr) return validationErr;

  const user = await userRepository.findByEmail(userData.email);
  if (user) {
    return {
      status: 409,
      message: "Email already exists",
    };
  }

  const hashedPassword = await authServices.hashPassword(userData.password);
  userData.password = hashedPassword;

  const createdUser = await userRepository.create(userData);
  if (!createdUser) {
    return {
      status: 500,
      message: "User could not be created",
    };
  }

  const verificationToken = await authServices.generateEmailVerificationToken({
    id: createdUser._id,
  });

  const isEmailSent = await emailServices.sendVerificationEmail(
    createdUser.email,
    verificationToken
  );

  if (!isEmailSent) {
    return {
      status: 500,
      message: "Email could not be sent",
    };
  }

  const accessToken = await authServices.generateAccessToken({
    id: createdUser._id,
    firstName: createdUser.firstName,
    lastName: createdUser.lastName,
    email: createdUser.email,
    roles: createdUser.roles.map((role) => role.name),
    isVerified: createdUser.isVerified,
    isBanned: createdUser.isBanned,
  });

  const refreshToken = await authServices.generateRefreshToken({
    id: createdUser._id,
  });

  const userToken = await userTokenRepository.find({ userId: createdUser._id });
  if (userToken.length > 0) {
    await userTokenRepository.update(userToken[0]._id, {
      refreshToken,
      updatedAt: new Date(),
    });
  } else {
    await userTokenRepository.create({
      userId: createdUser._id,
      refreshToken,
    });
  }

  return {
    status: 200,
    message: "User created successfully and verification email sent",
    user: {
      id: createdUser._id,
      firstName: createdUser.firstName,
      lastName: createdUser.lastName,
      email: createdUser.email,
      image: createdUser.image,
      address: createdUser.address,
      phoneNumber: createdUser.phoneNumber,
      roles: createdUser.roles.map((role) => role.name),
    },
    jwt: {
      accessToken,
      refreshToken,
    },
  };
};
