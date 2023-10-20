const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");

class AuthControllerImpl extends AuthControllerInterface {
  constructor(authServices) {
    super();
    this.authServices = authServices;
  }

  register = async (req, res) => {
    res.status(200).json({ message: "Welcome to Register" });
  };

  login = async (req, res) => {
    res.status(200).json({ message: "Welcome to Login" });
  };

  logout = async (req, res) => {
    res.status(200).json({ message: "Welcome to  Logout" });
  };
}

module.exports = AuthControllerImpl;
