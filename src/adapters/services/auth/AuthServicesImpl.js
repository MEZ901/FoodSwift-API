const bcrypt = require("bcryptjs");
const AuthServicesInterface = require("../../../application/interfaces/services/auth/AuthServicesInterface");

class AuthServicesImpl extends AuthServicesInterface {
  constructor(jsonWebToken) {
    super();
    this.jsonWebToken = jsonWebToken;
  }

  verifyToken = async (token) => {};

  validateData = (data, schema) => {
    const { error } = schema.validate(data);
    if (error) {
      return {
        status: 400,
        validationError: {
          field: error.details[0].context.key,
          message: error.details[0].message,
        },
      };
    }

    return null;
  };

  hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

  comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
  };

  generateToken = async (payload) => {
    const { access_token_secret, refresh_token_secret } = this.jsonWebToken;

    const accessToken = await this.jsonWebToken.generate(
      payload,
      access_token_secret,
      "15m"
    );
    const refreshToken = await this.jsonWebToken.generate(
      payload,
      refresh_token_secret,
      "7d"
    );

    return {
      accessToken,
      refreshToken,
    };
  };
}

module.exports = AuthServicesImpl;
