const CustomerServices = require("../../../application/interfaces/services/users/CustomerServices");

class CustomerServicesImpl extends CustomerServices {
  constructor() {
    super();
  }

  async createCustomer(customerData) {}

  async createManyCustomers(customersData) {}

  async getCustomerById(customerId) {}

  async updateCustomer(customerId, customerData) {}

  async deleteCustomer(customerId) {}
}

module.exports = CustomerServicesImpl;
