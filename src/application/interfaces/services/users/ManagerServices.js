/**
 * @interface
 */
class ManagerServices {
  constructor() {
    if (this.constructor === ManagerServices) {
      throw new Error(
        "ManagerServices is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Creates a new manager
   * @param {object} managerData - The data of the manager to create
   * @returns {Promise<object>} - The created manager object
   */
  async createManager(managerData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Creates many new managers
   * @param {object[]} managersData - The data of the managers to create
   * @returns {Promise<object[]>} - The created managers objects
   */
  async getManagerById(managerId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Retrieves a manager by their ID
   * @param {string} managerId - The ID of the manager to retrieve
   * @returns {Promise<object>} - The retrieved manager object
   */
  async updateManager(managerId, managerData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Deletes a manager by their ID
   * @param {string} managerId - The ID of the manager to delete
   * @returns {Promise<void>}
   */
  async deleteManager(managerId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = ManagerServices;
