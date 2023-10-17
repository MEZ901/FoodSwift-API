const User = require("../../frameworks/database/mongodb/models/User");

class UserRepoistory {
  async getAll() {
    return await User.find();
  }
}

module.exports = new UserRepoistory();
