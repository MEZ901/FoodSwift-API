// Controllers
const CustomerControllerImpl = require("./src/adapters/controllers/users/CustomerControllerImpl");
const DeliveryControllerImpl = require("./src/adapters/controllers/users/DeliveryControllerImpl");
const ManagerControllerImpl = require("./src/adapters/controllers/users/ManagerControllerImpl");

// Services
const CustomerServices = require("./src/adapters/services/users/CustomerServices");
const DeliveryServices = require("./src/adapters/services/users/DeliveryServices");
const ManagerServices = require("./src/adapters/services/users/ManagerServices");

// Models
const Role = require("./src/infrastructure/database/mongodb/models/Role");
const User = require("./src/infrastructure/database/mongodb/models/User");

// Repositories
const UserRepository = require("./src/adapters/repositories/UserRepository");
const RoleRepository = require("./src/adapters/repositories/RoleRepository");

// controllers instances
const customerController = new CustomerControllerImpl(new CustomerServices());
const deliveryController = new DeliveryControllerImpl(new DeliveryServices());
const managerController = new ManagerControllerImpl(new ManagerServices());

// repositories instances
const userRepository = new UserRepository(User, Role);
const roleRepository = new RoleRepository(Role);

module.exports = {
  customerController,
  deliveryController,
  managerController,
  userRepository,
  roleRepository,
};
