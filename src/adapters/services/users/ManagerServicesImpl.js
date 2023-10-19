const ManagerServices = require("../../../application/interfaces/services/users/ManagerServices");

class ManagerServicesImpl extends ManagerServices {
  constructor() {
    super();
  }

  async createManager(managerData) {}

  async getManagerById(managerId) {}

  async updateManager(managerId, managerData) {}

  async deleteManager(managerId) {}
}

module.exports = ManagerServicesImpl;
