const logger = require("../../../packages/winston");
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
      await roleRepository.createMany(roles);
      logger.info("Roles collection seeded successfully.");
    } else {
      logger.info("Roles collection already has data. Seeder skipped.");
    }
  } catch (error) {
    throw new Error(error);
  }
})();
