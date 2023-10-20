const AuthServicesInterface = require("../../../application/interfaces/services/auth/AuthServicesInterface");

class AuthServicesImpl extends AuthServicesInterface {
  constructor() {
    super();
  }

  register = async (data) => {};

  login = async (email, password) => {};

  verifyToken = async (token) => {};
}

module.exports = AuthServicesImpl;
