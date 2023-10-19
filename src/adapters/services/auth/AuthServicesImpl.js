const AuthServicesInterface = require("../../../application/interfaces/services/auth/AuthServicesInterface");

class AuthServicesImpl extends AuthServicesInterface {
  constructor() {
    super();
  }

  async register(data) {}

  async login(email, password) {}

  async verifyToken(token) {}
}

module.exports = AuthServicesImpl;
