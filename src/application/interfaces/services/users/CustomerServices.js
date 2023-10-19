/**
 * @interface
 */
class CustomerServices {
  constructor() {
    if (this.constructor === CustomerServices) {
      throw new Error(
        "CustomerServices is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Creates a new customer
   * @param {object} customerData - The data of the customer to create
   * @returns {Promise<object>} - The created customer object
   */
  async createCustomer(customerData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Creates many new customers
   * @param {object[]} customersData - The data of the customers to create
   * @returns {Promise<object[]>} - The created customers objects
   */
  async createManyCustomers(customersData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Retrieves a customer by their ID
   * @param {string} customerId - The ID of the customer to retrieve
   * @returns {Promise<object>} - The retrieved customer object
   */
  async getCustomerById(customerId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Updates a customer by their ID
   * @param {string} customerId - The ID of the customer to update
   * @param {object} customerData - The data to update the customer with
   * @returns {Promise<object>} - The updated customer object
   */
  async updateCustomer(customerId, customerData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Deletes a customer by their ID
   * @param {string} customerId - The ID of the customer to delete
   * @returns {Promise<void>}
   */
  async deleteCustomer(customerId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = CustomerServices;
