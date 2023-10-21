const bcrypt = require("bcryptjs");
const AuthServicesInterface = require("../../../application/interfaces/services/auth/AuthServicesInterface");

class AuthServicesImpl extends AuthServicesInterface {
  constructor(jsonWebToken) {
    super();
    this.jsonWebToken = jsonWebToken;
  }

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

  generateTokens = async (payload) => {
    const accessToken = await this.generateAccessToken(payload);
    const refreshToken = await this.generateRefreshToken(payload);

    return {
      accessToken,
      refreshToken,
    };
  };

  generateAccessToken = async (payload) => {
    const { access_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      access_token_secret,
      "15m"
    );
  };

  generateRefreshToken = async (payload) => {
    const { refresh_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      refresh_token_secret,
      "7d"
    );
  };

  verifyAccessToken = async (token) => {
    const { access_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.verify(token, access_token_secret);
  };

  verifyRefreshToken = async (token) => {
    const { refresh_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.verify(token, refresh_token_secret);
  };
}

module.exports = AuthServicesImpl;
