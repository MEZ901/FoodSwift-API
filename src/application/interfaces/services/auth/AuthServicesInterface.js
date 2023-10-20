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
   * Registers a new user with the given credentials
   * @param {object} data - The user's data
   * @returns {Promise<object>} - A promise that resolves with the created user
   */
  register = async (data) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Logs in a user with the given credentials
   * @param {string} email - The user's email address
   * @param {string} password - The user's password
   * @returns {Promise<string>} - A promise that resolves with a JWT token
   */
  login = async (email, password) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Verifies a JWT token and returns the decoded payload
   * @param {string} token - The JWT token to verify
   * @returns {Promise<object>} - A promise that resolves with the decoded payload
   */
  verifyToken = async (token) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = AuthServicesInterface;
