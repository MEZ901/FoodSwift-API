const Joi = require("joi");

const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required().label("Refresh Token"),
});

module.exports = refreshTokenSchema;
