const BaseUserServicesImpl = require("./BaseUserServicesImpl");

class ManagerServices extends BaseUserServicesImpl {
  constructor() {
    super();
    this.userRole = "manager";
  }
}

module.exports = ManagerServices;
