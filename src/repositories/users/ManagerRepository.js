const logger = require("../../frameworks/config/winston");
const BaseRepository = require("../BaseRepository");

class ManagerRepository extends BaseRepository {
  constructor(User, Role) {
    super(User);
    this.MongooseUser = User;
    this.MongooseRole = Role;
  }

  create = async (data) => {
    const { name, email, password, roleName, isVerified } = data;
    try {
      const role = await this.MongooseRole.findOne({ name: roleName });

      if (!role) {
        logger.error("Role does not exist");
      }

      const manager = await this.MongooseUser.create({
        name,
        email,
        password,
        role,
        isVerified,
      });

      return manager;
    } catch (error) {
      logger.error(error);
    }
  };
}

module.exports = ManagerRepository;
