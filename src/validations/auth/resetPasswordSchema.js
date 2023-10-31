const joi = require("joi");

const resetPasswordSchema = joi.object({
  token: joi.string().required(),
  newPassword: joi.string().min(6).required(),
});

module.exports = resetPasswordSchema;
