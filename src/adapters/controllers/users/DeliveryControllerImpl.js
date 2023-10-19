const DeliveryControllerInterface = require("../../../application/interfaces/controllers/users/DeliveryControllerInterface");

class DeliveryControllerImpl extends DeliveryControllerInterface {
  constructor(deliveryServices) {
    super();
    this.deliveryServices = deliveryServices;
  }

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
