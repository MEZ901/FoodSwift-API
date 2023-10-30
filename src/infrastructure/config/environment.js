require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 8080,
  mongo: {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/",
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || "foodswift",
  },
  jwt: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    EMAIL_VERIFICATION_TOKEN_SECRET:
      process.env.EMAIL_VERIFICATION_TOKEN_SECRET,
    RESET_PASSWORD_TOKEN_SECRET: process.env.RESET_PASSWORD_TOKEN_SECRET,
  },
  email: {
    HOST: process.env.EMAIL_HOST,
    SERVICE: process.env.EMAIL_SERVICE,
    PORT: Number(process.env.EMAIL_PORT),
    SECURE: Boolean(process.env.EMAIL_SECURE),
    AUTH: {
      USER: process.env.EMAIL_AUTH_USER,
      PASS: process.env.EMAIL_AUTH_PASS,
    },
  },
};
