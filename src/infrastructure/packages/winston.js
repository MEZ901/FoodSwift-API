const winston = require("winston");

const options = {
  file: {
    filename: `logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
  ),
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file),
  ],
  exitOnError: false,
});

module.exports = logger;
