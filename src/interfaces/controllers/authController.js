const userSeeder = require("../../frameworks/database/mongodb/seeders/userSeeder");
class authController {
  static register = async (req, res) => {
    userSeeder();
    res.json({ message: "register" });
  };
}

module.exports = authController;
