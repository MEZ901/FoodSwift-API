/**
 * @interface
 */
class AuthControllerInterface {
  constructor() {
    if (this.constructor === AuthControllerInterface) {
      throw new Error(
        "AuthControllerInterface is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Registers a new user.
   * @param {object} req
   * @param {object} res
   * @returns {Promise<void>}
   */
  register = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Logs in a user.
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  login = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Logs out a user.
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  logout = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = AuthControllerInterface;
