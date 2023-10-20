const BaseRepositoryImpl = require("./BaseRepositoryImpl");

class UserTokenRepository extends BaseRepositoryImpl {
  constructor(UserToken) {
    super(UserToken);
  }
}

module.exports = UserTokenRepository;
