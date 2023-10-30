const environment = require("../infrastructure/config/environment");
const jwt = require("jsonwebtoken");

class JsonWebToken {
  constructor() {
    this.access_token_secret = environment.jwt.ACCESS_TOKEN_SECRET;
    this.refresh_token_secret = environment.jwt.REFRESH_TOKEN_SECRET;
    this.email_verification_token_secret =
      environment.jwt.EMAIL_VERIFICATION_TOKEN_SECRET;
  }

  generate = async (payload, secret, exp) => {
    if (!this.access_token_secret || !this.refresh_token_secret) {
      throw new Error("JWT secret keys are not defined");
    }

    const options = {
      algorithm: "HS256",
      expiresIn: exp,
    };

    try {
      const token = await jwt.sign(payload, secret, options);
      return token;
    } catch (err) {
      throw new Error(err);
    }
  };

  verify = async (token, secret) => {
    if (!this.access_token_secret || !this.refresh_token_secret) {
      throw new Error("JWT secret keys are not defined");
    }

    try {
      const decoded = await jwt.verify(token, secret);
      return decoded;
    } catch (err) {
      throw new Error(err);
    }
  };
}

module.exports = new JsonWebToken();
