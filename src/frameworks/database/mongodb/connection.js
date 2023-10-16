const mongoose = require("mongoose");
const logger = require("../../config/winston");
const environment = require("../../config/environment");

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    logger.info("using existing database connection.");
    return Promise.resolve();
  }

  logger.info("using new database connection.");

  try {
    await mongoose.connect(environment.mongo.MONGO_URI, {
      dbName: environment.mongo.MONGO_DB_NAME,
    });
    isConnected = true;
    logger.info("connection to database established successfully.");
  } catch (error) {
    logger.error(`error while connecting to database: ${error}`);
  }
};

module.exports = connectToDB;
