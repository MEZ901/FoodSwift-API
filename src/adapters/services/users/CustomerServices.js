const BaseUserServicesImpl = require("./BaseUserServicesImpl");

class CustomerServices extends BaseUserServicesImpl {
  constructor() {
    super();
    this.userRole = "customer";
  }
}

module.exports = CustomerServices;
