// Controllers
const CustomerControllerImpl = require("./src/adapters/controllers/users/CustomerControllerImpl");
const DeliveryControllerImpl = require("./src/adapters/controllers/users/DeliveryControllerImpl");
const ManagerControllerImpl = require("./src/adapters/controllers/users/ManagerControllerImpl");
const AuthControllerImpl = require("./src/adapters/controllers/auth/AuthControllerImpl");

// Services
const CustomerServices = require("./src/adapters/services/users/CustomerServices");
const DeliveryServices = require("./src/adapters/services/users/DeliveryServices");
const ManagerServices = require("./src/adapters/services/users/ManagerServices");
const AuthServicesImpl = require("./src/adapters/services/auth/AuthServicesImpl");

// Models
const Role = require("./src/infrastructure/database/mongodb/models/Role");
const User = require("./src/infrastructure/database/mongodb/models/User");

// Repositories
const UserRepository = require("./src/adapters/repositories/UserRepository");
const RoleRepository = require("./src/adapters/repositories/RoleRepository");

// services instances
const customerServices = new CustomerServices();
const deliveryServices = new DeliveryServices();
const managerServices = new ManagerServices();
const authServices = new AuthServicesImpl();

// controllers instances
const customerController = new CustomerControllerImpl(customerServices);
const deliveryController = new DeliveryControllerImpl(deliveryServices);
const managerController = new ManagerControllerImpl(managerServices);
const authController = new AuthControllerImpl(authServices);

// repositories instances
const userRepository = new UserRepository(User, Role);
const roleRepository = new RoleRepository(Role);

module.exports = {
  customerController,
  deliveryController,
  managerController,
  authController,
  userRepository,
  roleRepository,
};
