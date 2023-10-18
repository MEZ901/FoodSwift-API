const { hashPassword } = require("../../../../utils/helpers");
const logger = require("../../../config/winston");
const User = require("../models/User");

module.exports = async () => {
  try {
    const manager = {
      name: "Admin",
      email: "admin@admin.com",
      password: await hashPassword("admin"),
      role: "manager",
      isVerified: true,
    };
    await User.create(manager);
    logger.info(`Manager has been successfully seeded.`);
  } catch (error) {
    logger.error(error);
  }
};
