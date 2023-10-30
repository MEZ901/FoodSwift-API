module.exports = async ({
  userData,
  registerSchema,
  authServices,
  emailServices,
  userRepository,
}) => {
  userData.roleNames = ["customer"];

  const validationErr = authServices.validateData(userData, registerSchema);
  if (validationErr) return validationErr;

  const user = await userRepository.findByEmail(userData.email);
  if (user) {
    return {
      status: 400,
      validationError: {
        field: "email",
        message: "Email already exists",
      },
    };
  }

  const hashedPassword = await authServices.hashPassword(userData.password);
  userData.password = hashedPassword;

  const createdUser = await userRepository.create(userData);
  if (!createdUser) {
    return {
      status: 400,
      message: "User could not be created",
    };
  }

  const isEmailSent = await emailServices.sendVerificationEmail(
    createdUser.email,
    "hhhhhhhhhh"
  );

  if (!isEmailSent) {
    return {
      status: 400,
      message: "Email could not be sent",
    };
  }

  return {
    status: 200,
    message: "User created successfully and verification email sent",
    user: createdUser,
  };
};
