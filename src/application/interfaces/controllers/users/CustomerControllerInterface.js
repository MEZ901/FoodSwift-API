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
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of created customer
   */
  createCustomer = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * get a customer by ID
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of customer
   */
  getCustomer = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * get all customers
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of customers
   */
  getAllCustomers = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * update a customer
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of updated customer
   */
  updateCustomer = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * delete a customer
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of deleted customer
   */
  deleteCustomer = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = CustomerControllerInterface;
