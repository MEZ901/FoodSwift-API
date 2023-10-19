const BaseRepositoryImpl = require("./BaseRepositoryImpl");

class UserRepoistory extends BaseRepositoryImpl {
  constructor(User, Role) {
    super(User);
    this.roleModel = Role;
  }

  async create(data) {
    const { roleNames, ...userCredentials } = data;
    try {
      const roles = await this.roleModel.find({ name: { $in: roleNames } });

      if (!roles) {
        throw new Error("Role does not exist");
      }

      return await this.model.create({
        roles,
        ...userCredentials,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createMany(data) {
    try {
      const availableRoles = await this.roleModel.find();

      if (!availableRoles) {
        throw new Error("Roles do not exist");
      }

      const users = data.map((user) => {
        const { roleNames, ...userCredentials } = user;

        const roles = availableRoles.filter((role) =>
          roleNames.includes(role.name)
        );

        return {
          roles,
          ...userCredentials,
        };
      });

      return await this.model.insertMany(users);
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserRepoistory;
