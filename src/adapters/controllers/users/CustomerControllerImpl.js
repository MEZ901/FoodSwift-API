const CustomerController = require("../../../application/interfaces/controllers/users/CustomerController");

class CustomerControllerImpl extends CustomerController {
  constructor(customerServices) {
    super();
    this.customerServices = customerServices;
  }

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
