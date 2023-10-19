const logger = require("../../../config/winston");
const { roleRepository } = require("../../../../../container");

(async () => {
  try {
    const existingRoles = await roleRepository.find();

    if (existingRoles.length === 0) {
      const roles = [
        { name: "manager" },
        { name: "delivery" },
        { name: "customer" },
      ];
      return await roleRepository.createMany(roles);
    } else {
      logger.info("Roles collection already has data. Seeder skipped.");
    }
  } catch (error) {
    throw new Error(error);
  }
})();
