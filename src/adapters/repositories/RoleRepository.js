const BaseRepositoryImpl = require("./BaseRepositoryImpl");

class RoleRepository extends BaseRepositoryImpl {
  constructor(Role) {
    super(Role);
  }
}

module.exports = RoleRepository;
