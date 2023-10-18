const managerSeeder = require("../../../frameworks/database/mongodb/seeders/managerSeeder");

class ManagerController {
  static seed = async (req, res) => {
    try {
      await managerSeeder();
      res.status(200).json({ message: "Manager seeded successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

module.exports = ManagerController;
