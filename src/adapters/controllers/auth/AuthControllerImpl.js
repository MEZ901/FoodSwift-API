const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");

class AuthControllerImpl extends AuthControllerInterface {
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
