const environment = require("../infrastructure/config/environment");
const jwt = require("jsonwebtoken");

class JsonWebToken {
  constructor() {
    this.access_token_secret = environment.jwt.ACCESS_TOKEN_SECRET;
    this.refresh_token_secret = environment.jwt.REFRESH_TOKEN_SECRET;
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
      throw err;
    }
  };
}

module.exports = new JsonWebToken();
