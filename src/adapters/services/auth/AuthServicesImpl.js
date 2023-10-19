const AuthServices = require("../../../application/interfaces/services/auth/AuthServices");

class AuthServicesImpl extends AuthServices {
  constructor() {
    super();
  }

  async register(data) {}

  async login(email, password) {}

  async verifyToken(token) {}
}

module.exports = AuthServicesImpl;
