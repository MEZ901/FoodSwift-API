/**
 * @interface
 */
class BaseUserServicesInterface {
  constructor() {
    if (this.constructor === BaseUserServicesInterface) {
      throw new Error(
        "BaseUserServicesInterface is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Creates a new user
   * @param {object} userData - The data of the user to create
   * @returns {Promise<object>} - The created user object
   */
  createUser = async (userData) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Creates many new users
   * @param {object[]} usersData - The data of the users to create
   * @returns {Promise<object[]>} - The created users objects
   */
  createManyUsers = async (usersData) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Retrieves a user by their ID
   * @param {string} userId - The ID of the user to retrieve
   * @returns {Promise<object>} - The retrieved user object
   */
  getUserById = async (userId) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Updates a user by their ID
   * @param {string} userId - The ID of the user to update
   * @param {object} userData - The data to update the user with
   * @returns {Promise<object>} - The updated user object
   */
  updateUser = async (userId, userData) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * Deletes a user by their ID
   * @param {string} userId - The ID of the user to delete
   * @returns {Promise<void>}
   */
  deleteUser = async (userId) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = BaseUserServicesInterface;
