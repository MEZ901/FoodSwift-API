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

  generateEmailVerificationToken = async (payload) => {
    const { email_verification_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      email_verification_token_secret,
      "10m"
    );
  };

  verifyEmailToken = async (token) => {
    const { email_verification_token_secret } = this.jsonWebToken;
    try {
      const payload = await this.jsonWebToken.verify(
        token,
        email_verification_token_secret
      );

      return {
        status: 200,
        payload,
      };
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        return {
          status: 401,
          message: "Token expired",
        };
      }

      return {
        status: 400,
        message: "Invalid token",
      };
    }
  };

  generateResetPasswordToken = async (payload) => {
    const { reset_password_token_secret } = this.jsonWebToken;
    return await this.jsonWebToken.generate(
      payload,
      reset_password_token_secret,
      "10m"
    );
  };

  verifyResetPasswordToken = async (token) => {
    const { reset_password_token_secret } = this.jsonWebToken;

    try {
      const payload = await this.jsonWebToken.verify(
        token,
        reset_password_token_secret
      );

      return {
        status: 200,
        payload,
      };
    } catch (error) {
      if (error.message.includes("jwt expired")) {
        return {
          status: 401,
          message: "Token expired",
        };
      }

      return {
        status: 400,
        message: "Invalid token",
      };
    }
  };
}

module.exports = AuthServicesImpl;
