const logger = require("../../../config/winston");
const Role = require("../models/Role");

module.exports = async () => {
  try {
    const roles = [
      { name: "manager" },
      { name: "delivery" },
      { name: "customer" },
    ];
    await Role.insertMany(roles);
    logger.info(`Roles have been successfully seeded.`);
  } catch (error) {
    logger.error(error);
  }
};
