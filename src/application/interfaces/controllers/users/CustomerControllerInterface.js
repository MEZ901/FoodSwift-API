/**
 * @interface
 */
class CustomerControllerInterface {
  constructor() {
    if (this.constructor === CustomerControllerInterface) {
      throw new Error(
        "CustomerControllerInterface is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * create a new customer
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async createCustomer(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * get a customer by ID
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async getCustomer(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * get all customers
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async getAllCustomers(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * update a customer
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async updateCustomer(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * delete a customer
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async deleteCustomer(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = CustomerControllerInterface;
