class ManagerController {
  static seed = async (req, res) => {
    const managerSeeder = require("../../../frameworks/database/mongodb/seeders/managerSeeder");

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

module.exports = ManagerController;
