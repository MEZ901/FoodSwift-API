/**
 * @interface
 */
class ManagerController {
  constructor() {
    if (this.constructor === ManagerController) {
      throw new Error(
        "ManagerController is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * create a new manager
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async createManager(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * get a manager by ID
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async getManager(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * get all managers
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async getAllManagers(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * update a manager
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async updateManager(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * delete a manager
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async deleteManager(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = ManagerController;
