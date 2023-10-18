const BaseRepository = require("./BaseRepository");

class UserRepoistory extends BaseRepository {
  constructor(User, Role) {
    super(User);
    this.roleModel = Role;
  }

  async create(data) {
    const { roleName, ...userCredentials } = data;
    try {
      const role = await this.roleModel.findOne({ name: roleName });

      if (!role) {
        throw new Error("Role does not exist");
      }

      return await this.model.create({
        role,
        ...userCredentials,
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async createMany(data) {
    try {
      const roles = await this.roleModel.find();

      if (!roles) {
        throw new Error("Roles do not exist");
      }

      const users = data.map((user) => {
        const { roleName, ...userCredentials } = user;
        const role = roles.find((role) => role.name === roleName);

        return {
          role,
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
