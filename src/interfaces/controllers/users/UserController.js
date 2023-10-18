const logger = require("../../../frameworks/config/winston");

class UserController {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  static async getAllUsers(req, res) {
    try {
      const users = await UserRepository.getAll();
      res.status(200).json({ users });
    } catch (error) {
      logger.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}

module.exports = UserController;
