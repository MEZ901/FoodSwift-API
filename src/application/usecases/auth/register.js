module.exports = async (
  userData,
  registerSchema,
  authServices,
  userRepository
) => {
  userData.roleNames = ["customer"];

  const validationErr = authServices.validateData(userData, registerSchema);
  if (validationErr) {
    return validationErr;
  }

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

  return {
    status: 200,
    message: "User created successfully",
    user: createdUser,
  };
};
