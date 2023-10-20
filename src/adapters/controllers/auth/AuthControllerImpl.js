const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");

class AuthControllerImpl extends AuthControllerInterface {
  constructor(options) {
    super();
    this.usecases = options.usecases;
    this.schemas = options.schemas;
    this.authServices = options.authServices;
    this.userRepository = options.userRepository;
  }

  register = async (req, res) => {
    const { status, ...rest } = await this.usecases.register(
      { ...req.body },
      this.schemas.registerSchema,
      this.authServices,
      this.userRepository
    );

    res.status(status).json({ ...rest });
  };

  login = async (req, res) => {
    res.status(200).json({ message: "Welcome to Login" });
  };

  logout = async (req, res) => {
    res.status(200).json({ message: "Welcome to  Logout" });
  };
}

module.exports = AuthControllerImpl;
