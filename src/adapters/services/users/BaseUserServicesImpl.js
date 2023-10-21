const BaseUserServicesInterface = require("../../../application/interfaces/services/users/BaseUserServicesInterface");

class BaseUserServicesImpl extends BaseUserServicesInterface {
  constructor() {
    super();
    this.userRole = "";
  }

  profile = async (user) => {
    const res = {
      status: 200,
      message: `Welcome ${user.name}, you are logged in as a ${this.userRole}.`,
    };
  };

  seedUsers = async (amount, userSeeder) => {
    const res = {
      status: 200,
      message: "",
    };

    if (amount && isNaN(amount)) {
      res.status = 400;
      res.message = "Amount must be a number.";
      return res;
    }

    try {
      res.users = await userSeeder(amount && parseInt(amount));
      res.message = amount
        ? `${amount} ${this.userRole}s have been successfully seeded.`
        : `1 ${this.userRole} have been successfully seeded.`;
      return res;
    } catch (error) {
      res.status = 500;
      res.message = error.message;
      return res;
    }
  };
}

module.exports = BaseUserServicesImpl;
