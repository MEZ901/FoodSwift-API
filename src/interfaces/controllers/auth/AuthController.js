const logger = require("../../../frameworks/config/winston");

class AuthController {
  static register = async (req, res) => {
    res.status(200).json({ message: "Register" });
  };
}

module.exports = AuthController;
