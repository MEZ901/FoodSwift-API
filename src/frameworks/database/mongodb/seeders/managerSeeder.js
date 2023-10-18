const { hashPassword } = require("../../../../utils/helpers");
const UserRepoistory = require("../../../../repositories/UserRepository");
const Role = require("../models/Role");
const User = require("../models/User");

module.exports = async () => {
  try {
    const managerCredentials = {
      name: "Admin",
      email: "admin@admin.com",
      password: await hashPassword("admin"),
      roleName: "manager",
      isVerified: true,
    };

    const repository = new UserRepoistory(User, Role);
    return await repository.create(managerCredentials);
  } catch (error) {
    throw new Error(error);
  }
};
