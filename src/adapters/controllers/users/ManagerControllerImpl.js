const ManagerControllerInterface = require("../../../application/interfaces/controllers/users/ManagerControllerInterface");

class ManagerControllerImpl extends ManagerControllerInterface {
  constructor(options) {
    super();
    this.managerServices = options.managerServices;
    this.usecases = options.usecases;
  }

  profile = async (req, res) => {
    const { status, ...rest } = await this.usecases.managerProfile({
      user: req.user,
    });
    return res.status(status).json({ ...rest });
  };

  seed = async (req, res) => {
    const managerSeeder = require("../../../infrastructure/database/mongodb/seeders/managerSeeder");
    const amount = req.query.amount;

    const { status, ...rest } = await this.managerServices.seedUsers(
      amount,
      managerSeeder
    );

    return res.status(status).json({ ...rest });
  };
}

module.exports = ManagerControllerImpl;
