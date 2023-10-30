module.exports = async ({ token, authServices, userRepository }) => {
  const tokenVerificationResponse = await authServices.verifyEmailToken(token);

  if (tokenVerificationResponse.status !== 200) {
    return tokenVerificationResponse;
  }

  const { id } = tokenVerificationResponse.payload;

  const user = await userRepository.findById(id);

  if (!user) {
    return {
      status: 400,
      message: "Invalid token",
    };
  }

  if (user.isVerified) {
    return {
      status: 400,
      message: "Email already verified",
    };
  }

  const verifiedUser = await userRepository.update(id, { isVerified: true });

  return {
    status: 200,
    message: "Email verified successfully",
    user: verifiedUser,
  };
};
