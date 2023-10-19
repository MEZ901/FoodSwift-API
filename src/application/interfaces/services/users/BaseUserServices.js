/**
 * @interface
 */
class BaseUserServices {
  constructor() {
    if (this.constructor === BaseUserServices) {
      throw new Error(
        "BaseUserServices is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Creates a new user
   * @param {object} userData - The data of the user to create
   * @returns {Promise<object>} - The created user object
   */
  async createUser(userData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Creates many new users
   * @param {object[]} usersData - The data of the users to create
   * @returns {Promise<object[]>} - The created users objects
   */
  async createManyUsers(usersData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Retrieves a user by their ID
   * @param {string} userId - The ID of the user to retrieve
   * @returns {Promise<object>} - The retrieved user object
   */
  async getUserById(userId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Updates a user by their ID
   * @param {string} userId - The ID of the user to update
   * @param {object} userData - The data to update the user with
   * @returns {Promise<object>} - The updated user object
   */
  async updateUser(userId, userData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Deletes a user by their ID
   * @param {string} userId - The ID of the user to delete
   * @returns {Promise<void>}
   */
  async deleteUser(userId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = BaseUserServices;
