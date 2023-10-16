const mongoose = require("mongoose");
const logger = require("../../config/winston");
const environment = require("../../config/environment");

mongoose.set("strictQuery", true);

mongoose.connect(environment.mongo.MONGO_URI, {
  dbName: environment.mongo.MONGO_DB_NAME,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    logger.info("connection to database established successfully.");
  })
  .on("error", (error) => {
    logger.error(`error while connecting to database: ${error}`);
  })
  .on("disconnected", () => {
    logger.info("database connection closed.");
  });

module.exports = mongoose;
