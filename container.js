const CustomerControllerImpl = require("./src/adapters/controllers/users/CustomerControllerImpl");
const CustomerServices = require("./src/adapters/services/users/CustomerServices");
const DeliveryControllerImpl = require("./src/adapters/controllers/users/DeliveryControllerImpl");
const DeliveryServices = require("./src/adapters/services/users/DeliveryServices");
const ManagerControllerImpl = require("./src/adapters/controllers/users/ManagerControllerImpl");
const ManagerServices = require("./src/adapters/services/users/ManagerServices");

const customerController = new CustomerControllerImpl(new CustomerServices());
const deliveryController = new DeliveryControllerImpl(new DeliveryServices());
const managerController = new ManagerControllerImpl(new ManagerServices());

module.exports = {
  customerController,
  deliveryController,
  managerController,
};
