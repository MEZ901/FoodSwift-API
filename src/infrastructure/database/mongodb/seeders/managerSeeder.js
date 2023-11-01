const { userRepository } = require("../../../../../container");
const { authServices } = require("../../../../../container");

module.exports = async () => {
  try {
    const manager = {
      firstName: "Admin",
      lastName: "Admin",
      email: "admin@admin.com",
      password: await authServices.hashPassword("adminadmin"),
      roleNames: ["customer", "delivery", "manager"],
      isVerified: true,
    };

    return await userRepository.create(manager);
  } catch (error) {
    throw new Error(error);
  }
};
