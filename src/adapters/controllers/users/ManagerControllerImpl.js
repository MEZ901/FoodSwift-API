const ManagerControllerInterface = require("../../../application/interfaces/controllers/users/ManagerControllerInterface");

class ManagerControllerImpl extends ManagerControllerInterface {
  constructor(managerServices) {
    super();
    this.managerServices = managerServices;
  }

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
