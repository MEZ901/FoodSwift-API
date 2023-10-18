const BaseRepositoryImpl = require("./BaseRepositoryImpl");

class AuthRepository extends BaseRepositoryImpl {
  constructor(User) {
    super(User);
  }
}

module.exports = AuthRepository;
