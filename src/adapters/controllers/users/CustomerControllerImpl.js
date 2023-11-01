const CustomerControllerInterface = require("../../../application/interfaces/controllers/users/CustomerControllerInterface");

class CustomerControllerImpl extends CustomerControllerInterface {
  constructor(options) {
    super();
    this.customerServices = options.customerServices;
    this.usecases = options.usecases;
  }

  profile = async (req, res) => {
    const { status, ...rest } = await this.usecases.customerProfile({
      user: req.user,
    });
    return res.status(status).json({ ...rest });
  };

  seed = async (req, res) => {
    const customerSeeder = require("../../../infrastructure/database/mongodb/seeders/customerSeeder");
    const amount = req.query.amount;

    const { status, ...rest } = await this.customerServices.seedUsers(
      amount,
      customerSeeder
    );

    return res.status(status).json({ ...rest });
  };
}

module.exports = CustomerControllerImpl;
