/**
 * @interface
 */
class ManagerControllerInterface {
  constructor() {
    if (this.constructor === ManagerControllerInterface) {
      throw new Error(
        "ManagerControllerInterface is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * create a new manager
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of created manager
   */
  createManager = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * get a manager by ID
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of manager
   */
  getManager = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * get all managers
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of managers
   */
  getAllManagers = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * update a manager
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of updated manager
   */
  updateManager = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * delete a manager
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of deleted manager
   */
  deleteManager = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = ManagerControllerInterface;
