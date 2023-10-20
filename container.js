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
const UserToken = require("./src/infrastructure/database/mongodb/models/UserToken");

// Repositories
const UserRepository = require("./src/adapters/repositories/UserRepository");
const RoleRepository = require("./src/adapters/repositories/RoleRepository");
const UserTokenRepository = require("./src/adapters/repositories/UserTokenRepository");

// Usecases
const register = require("./src/application/usecases/auth/register");
const login = require("./src/application/usecases/auth/login");

// Validation schemas
const registerSchema = require("./src/validations/auth/registerSchema");
const loginSchema = require("./src/validations/auth/loginSchema");

// JsonWebToken
const jsonWebToken = require("./src/utils/JsonWebToken");

// repositories instances
const userRepository = new UserRepository(User, Role);
const roleRepository = new RoleRepository(Role);
const userTokenRepository = new UserTokenRepository(UserToken);

// services instances
const customerServices = new CustomerServices();
const deliveryServices = new DeliveryServices();
const managerServices = new ManagerServices();
const authServices = new AuthServicesImpl(jsonWebToken);

// controllers instances
const customerController = new CustomerControllerImpl(customerServices);
const deliveryController = new DeliveryControllerImpl(deliveryServices);
const managerController = new ManagerControllerImpl(managerServices);
const authController = new AuthControllerImpl({
  usecases: {
    register,
    login,
  },
  schemas: {
    registerSchema,
    loginSchema,
  },
  authServices,
  userRepository,
  userTokenRepository,
});

module.exports = {
  customerController,
  deliveryController,
  managerController,
  authController,
  userRepository,
  roleRepository,
  userTokenRepository,
};
