const BaseUserServicesImpl = require("./BaseUserServicesImpl");

class DeliveryServices extends BaseUserServicesImpl {
  constructor() {
    super();
    this.userRole = "delivery";
  }
}

module.exports = DeliveryServices;
