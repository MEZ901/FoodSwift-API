/**
 * @interface
 */
class AuthController {
  constructor() {
    if (this.constructor === AuthController) {
      throw new Error(
        "AuthController is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Registers a new user.
   * @param {object} req
   * @param {object} res
   * @returns {Promise<void>}
   */
  async register(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Logs in a user.
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async login(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Logs out a user.
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async logout(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = AuthController;
