const AuthControllerInterface = require("../../../application/interfaces/controllers/auth/AuthControllerInterface");

class AuthControllerImpl extends AuthControllerInterface {
  constructor(options) {
    super();
    this.usecases = options.usecases;
    this.schemas = options.schemas;
    this.authServices = options.authServices;
    this.userRepository = options.userRepository;
    this.userTokenRepository = options.userTokenRepository;
  }

  register = async (req, res) => {
    const { status, ...rest } = await this.usecases.register({
      userData: { ...req.body },
      registerSchema: this.schemas.registerSchema,
      authServices: this.authServices,
      userRepository: this.userRepository,
    });

    res.status(status).json({ ...rest });
  };

  login = async (req, res) => {
    const { status, ...rest } = await this.usecases.login({
      userData: { ...req.body },
      lgoinSchema: this.schemas.loginSchema,
      authServices: this.authServices,
      userRepository: this.userRepository,
      userTokenRepository: this.userTokenRepository,
    });

    res.status(status).json({ ...rest });
  };

  logout = async (req, res) => {
    res.status(200).json({ message: "Welcome to  Logout" });
  };
}

module.exports = AuthControllerImpl;
