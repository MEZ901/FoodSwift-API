const bcrypt = require("bcryptjs");
const AuthServicesInterface = require("../../../application/interfaces/services/auth/AuthServicesInterface");

class AuthServicesImpl extends AuthServicesInterface {
  constructor() {
    super();
  }

  verifyToken = async (token) => {};

  validateData = (data, schema) => {
    const { error } = schema.validate(data);
    if (error) {
      return {
        status: 400,
        validationError: {
          field: error.details[0].context.key,
          message: error.details[0].message,
        },
      };
    }

    return null;
  };

  hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
}

module.exports = AuthServicesImpl;
