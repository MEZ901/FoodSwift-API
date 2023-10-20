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

  /**
   * Compares the given password with the given hashed password
   * @param {string} password - The password to compare
   * @param {string} hashedPassword - The hashed password to compare
   * @returns {Promise<boolean>} - A promise that resolves with a boolean indicating whether the password is valid or not
   */
  comparePassword = async (password, hashedPassword) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Generates a JWT token with the given payload
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the JWT token
   */
  generateToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = AuthServicesInterface;
