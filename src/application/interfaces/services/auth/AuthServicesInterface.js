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
   * Generates an access token
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the access token
   */
  generateAccessToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Generates a refresh token
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the refresh token
   */
  generateRefreshToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verifies the given access token
   * @param {string} token - The access token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded access token
   */
  verifyAccessToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verifies the given refresh token
   * @param {string} token - The refresh token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded refresh token
   */
  verifyRefreshToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Generates an email verification token
   * @param {object} payload - The payload to sign
   * @returns {Promise<string>} - A promise that resolves with the email verification token
   */
  generateEmailVerificationToken = async (payload) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = AuthServicesInterface;
