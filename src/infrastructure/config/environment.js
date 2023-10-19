require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 8080,
  mongo: {
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/marhabadine",
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || "marhabadine",
  },
  jwt: {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  },
};
