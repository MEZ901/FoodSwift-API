const ManagerController = require("../../../application/interfaces/controllers/users/ManagerController");

class ManagerControllerImpl extends ManagerController {
  constructor() {
    super();
  }

  async createManager(req, res) {}

  async getManagers(req, res) {}

  async getAllManagers(req, res) {}

  async updateManager(req, res) {}

  async deleteManager(req, res) {}

  static seed = async (req, res) => {
    const managerSeeder = require("../../../infrastructure/database/mongodb/seeders/managerSeeder");

    try {
      const manager = await managerSeeder();
      res.status(200).json({
        message: "Manager has been successfully seeded.",
        manager,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

module.exports = ManagerControllerImpl;
