const BaseUserServicesInterface = require("../../../application/interfaces/services/users/BaseUserServicesInterface");

class BaseUserServicesImpl extends BaseUserServicesInterface {
  constructor() {
    super();
    this.userRole = "";
  }

  async createUser(userData) {}

  async createManyUsers(usersData) {}

  async getUserById(userId) {}

  async updateUser(userId, userData) {}

  async deleteUser(userId) {}

  async seedUsers(amount, userSeeder) {
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
  }
}

module.exports = BaseUserServicesImpl;
