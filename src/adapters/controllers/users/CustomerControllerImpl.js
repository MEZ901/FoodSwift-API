const CustomerController = require("../../../application/interfaces/controllers/users/CustomerController");

class CustomerControllerImpl extends CustomerController {
  constructor() {
    super();
  }

  static seed = async (req, res) => {
    const customerSeeder = require("../../../frameworks/database/mongodb/seeders/customerSeeder");
    const amount = req.query.amount;
    let message;

    if (amount && isNaN(amount)) {
      message = "Amount must be a number.";
      return res.status(400).json({ message });
    }

    try {
      const customer = await customerSeeder(amount && parseInt(amount));
      message = amount
        ? `${amount} customers have been successfully seeded.`
        : "1 customer have been successfully seeded.";
      res.status(200).json({ message, customer });
    } catch (error) {
      message = error.message;
      res.status(500).json({ message });
    }
  };
}

module.exports = CustomerControllerImpl;
