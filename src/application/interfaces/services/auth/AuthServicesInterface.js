/**
 * @interface
 */
class AuthServicesInterface {
  constructor() {
    if (this.constructor === AuthServicesInterface) {
      throw new Error(
        "AuthServicesInterface is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Verifies a JWT token and returns the decoded payload
   * @param {string} token - The JWT token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded payload
   */
  verifyToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Validates the given data against the given schema
   * @param {object} data - The data to validate
   * @param {object} schema - The schema to validate the data against
   * @returns {object} - An object containing the status and message in case of an error
   */
  validateData = (data, schema) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Hashes the given password
   * @param {string} password - The password to hash
   * @returns {Promise<string>} - A promise that resolves with the hashed password
   */
  hashPassword = async (password) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = AuthServicesInterface;
