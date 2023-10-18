class DeliveryController {
  static seed = async (req, res) => {
    const deliverySeeder = require("../../../frameworks/database/mongodb/seeders/deliverySeeder");
    const amount = req.query.amount;
    let message;

    if (amount && isNaN(amount)) {
      message = "Amount must be a number.";
      return res.status(400).json({ message });
    }

    try {
      const delivery = await deliverySeeder(amount && parseInt(amount));
      message = amount
        ? `${amount} deliveries have been successfully seeded.`
        : "1 delivery have been successfully seeded.";
      res.status(200).json({ message, delivery });
    } catch (error) {
      message = error.message;
      res.status(500).json({ message });
    }
  };
}

module.exports = DeliveryController;
