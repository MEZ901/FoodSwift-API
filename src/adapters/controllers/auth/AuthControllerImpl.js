const AuthController = require("../../../application/interfaces/controllers/auth/AuthController");

class AuthControllerImpl extends AuthController {
  constructor() {
    super();
  }

  async register(req, res) {
    res.status(200).json({ message: "Register" });
  }

  async login(req, res) {
    res.status(200).json({ message: "Login" });
  }

  async logout(req, res) {
    res.status(200).json({ message: "Logout" });
  }
}

module.exports = AuthControllerImpl;
