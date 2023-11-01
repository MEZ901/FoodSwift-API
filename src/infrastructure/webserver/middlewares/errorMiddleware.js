const logger = require("../../packages/winston");
const { NODE_ENV } = require("../../config/environment");

const errorMiddleware = (err, req, res, next) => {
  const { status = 500, message } = err;
  const { method, originalUrl, ip } = req;

  res.locals.message = err.message;
  res.locals.error = NODE_ENV === "development" ? err : {};

  logger.error(
    `${message} - Status: ${status} - URL: ${originalUrl} - Method: ${method} - IP: ${ip}`
  );

  res.status(status);
  res.json({ error: message });
};

module.exports = errorMiddleware;
