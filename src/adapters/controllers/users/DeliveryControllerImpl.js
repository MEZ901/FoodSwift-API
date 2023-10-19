const DeliveryController = require("../../../application/interfaces/controllers/users/DeliveryController");

class DeliveryControllerImpl extends DeliveryController {
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
