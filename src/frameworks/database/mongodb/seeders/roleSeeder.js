const RoleRepository = require("../../../../repositories/RoleRepository");
const Role = require("../models/Role");
const logger = require("../../../config/winston");

(async () => {
  try {
    const repository = new RoleRepository(Role);
    const existingRoles = await repository.find();

    if (existingRoles.length === 0) {
      const roles = [
        { name: "manager" },
        { name: "delivery" },
        { name: "customer" },
      ];
      return await repository.createMany(roles);
    } else {
      logger.info("Roles collection already has data. Seeder skipped.");
    }
  } catch (error) {
    throw new Error(error);
  }
})();
