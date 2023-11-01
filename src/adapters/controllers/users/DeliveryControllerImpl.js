const DeliveryControllerInterface = require("../../../application/interfaces/controllers/users/DeliveryControllerInterface");

class DeliveryControllerImpl extends DeliveryControllerInterface {
  constructor(options) {
    super();
    this.deliveryServices = options.deliveryServices;
    this.usecases = options.usecases;
  }

  profile = async (req, res) => {
    const { status, ...rest } = await this.usecases.deliveryProfile({
      user: req.user,
    });
    return res.status(status).json({ ...rest });
  };

  seed = async (req, res) => {
    const deliverySeeder = require("../../../infrastructure/database/mongodb/seeders/deliverySeeder");
    const amount = req.query.amount;

    const { status, ...rest } = await this.deliveryServices.seedUsers(
      amount,
      deliverySeeder
    );

    return res.status(status).json({ ...rest });
  };
}

module.exports = DeliveryControllerImpl;
