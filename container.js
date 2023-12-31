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
const EmailServicesImpl = require("./src/adapters/services/email/EmailServicesImpl");

// Models
const Role = require("./src/infrastructure/database/mongodb/models/Role");
const User = require("./src/infrastructure/database/mongodb/models/User");
const UserToken = require("./src/infrastructure/database/mongodb/models/UserToken");

// Repositories
const UserRepository = require("./src/adapters/repositories/UserRepository");
const RoleRepository = require("./src/adapters/repositories/RoleRepository");
const UserTokenRepository = require("./src/adapters/repositories/UserTokenRepository");

// Gateways
const EmailGatewayImpl = require("./src/adapters/gateways/EmailGatewayImpl");

// Usecases
const register = require("./src/application/usecases/auth/register");
const login = require("./src/application/usecases/auth/login");
const refreshToken = require("./src/application/usecases/auth/refreshToken");
const logout = require("./src/application/usecases/auth/logout");
const verifyEmail = require("./src/application/usecases/auth/verifyEmail");
const sendResetPasswordEmail = require("./src/application/usecases/auth/sendResetPasswordEmail");
const resetPassword = require("./src/application/usecases/auth/resetPassword");
const customerProfile = require("./src/application/usecases/customer/getCustomerProfile");
const deliveryProfile = require("./src/application/usecases/delivery/getDeliveryProfile");
const managerProfile = require("./src/application/usecases/manager/getManagerProfile");

// Validation schemas
const registerSchema = require("./src/validations/auth/registerSchema");
const loginSchema = require("./src/validations/auth/loginSchema");
const refreshTokenSchema = require("./src/validations/auth/refreshTokenSchema");
const resetPasswordSchema = require("./src/validations/auth/resetPasswordSchema");

// JsonWebToken
const jsonWebToken = require("./src/utils/JsonWebToken");

// repositories instances
const userRepository = new UserRepository(User, Role);
const roleRepository = new RoleRepository(Role);
const userTokenRepository = new UserTokenRepository(UserToken);

// gateways instances
const emailGateway = new EmailGatewayImpl();

// services instances
const customerServices = new CustomerServices();
const deliveryServices = new DeliveryServices();
const managerServices = new ManagerServices();
const authServices = new AuthServicesImpl(jsonWebToken);
const emailServices = new EmailServicesImpl(emailGateway);

// controllers instances
const customerController = new CustomerControllerImpl({
  usecases: { customerProfile },
  customerServices,
});
const deliveryController = new DeliveryControllerImpl({
  usecases: { deliveryProfile },
  deliveryServices,
});
const managerController = new ManagerControllerImpl({
  usecases: { managerProfile },
  managerServices,
});
const authController = new AuthControllerImpl({
  usecases: {
    register,
    login,
    refreshToken,
    logout,
    verifyEmail,
    sendResetPasswordEmail,
    resetPassword,
  },
  schemas: {
    registerSchema,
    loginSchema,
    refreshTokenSchema,
    resetPasswordSchema,
  },
  authServices,
  emailServices,
  userRepository,
  userTokenRepository,
});

module.exports = {
  customerController,
  deliveryController,
  managerController,
  authController,
  customerServices,
  deliveryServices,
  managerServices,
  authServices,
  userRepository,
  roleRepository,
  userTokenRepository,
};
