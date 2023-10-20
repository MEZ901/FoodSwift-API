const Joi = require("joi");

const registerSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().required().email(),
  password: Joi.string().min(6).required(),
  image: Joi.string().allow(null),
  phoneNumber: Joi.string().allow(null),
  address: Joi.string().allow(null),
  roleNames: Joi.array().items(Joi.string()).required(),
});

module.exports = registerSchema;
