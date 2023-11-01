module.exports = async ({ user }) => {
  return {
    status: 200,
    message: `Hello ${user.firstName} ${user.lastName}, your role is manager`,
  };
};
