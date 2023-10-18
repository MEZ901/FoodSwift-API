const customerSeeder = require("../../../frameworks/database/mongodb/seeders/customerSeeder");

class CustomerController {
  seed = async (req, res) => {
    const amount = req.query.amount;
    try {
      await customerSeeder(amount && parseInt(amount));
      res.status(200).json({ message: "Customer seeded successfully." });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
}

module.exports = new CustomerController();
