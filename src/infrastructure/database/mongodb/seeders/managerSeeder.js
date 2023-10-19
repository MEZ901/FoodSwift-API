const { hashPassword } = require("../../../../utils/helpers");

module.exports = async () => {
  try {
    const manager = {
      name: "Admin",
      email: "admin@admin.com",
      password: await hashPassword("admin"),
      roleName: "manager",
      isVerified: true,
    };

    return manager;
  } catch (error) {
    throw new Error(error);
  }
};
