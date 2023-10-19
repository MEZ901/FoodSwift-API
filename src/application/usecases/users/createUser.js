module.exports = async (userData, userServices, userRepository) => {
  const validatedUserData = userServices.validateUserData(userData);
  const createdUser = await userRepository.create(validatedUserData);

  return createdUser;
};
