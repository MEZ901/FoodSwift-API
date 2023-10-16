const mongoose = require("mongoose");
const config = require("../../config");

let isConnected = false;

const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("=> using existing database connection...");
    return Promise.resolve();
  }

  console.log("=> using new database connection...");

  try {
    await mongoose.connect(config.mongo.MONGO_URI, {
      dbName: config.mongo.MONGO_DB_NAME,
    });
    isConnected = true;
    console.log("=> connection to database established successfully.");
  } catch (error) {
    console.log("=> error while connecting to database: ", error);
  }
};

module.exports = connectToDB;
