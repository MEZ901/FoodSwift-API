const BaseUserServices = require("../../../application/interfaces/services/users/BaseUserServices");

class BaseUserServicesImpl extends BaseUserServices {
  constructor() {
    super();
  }

  async createUser(userData) {}

  async createManyUsers(usersData) {}

  async getUserById(userId) {}

  async updateUser(userId, userData) {}

  async deleteUser(userId) {}
}

module.exports = BaseUserServicesImpl;
