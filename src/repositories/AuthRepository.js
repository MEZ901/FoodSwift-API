const BaseRepository = require("./BaseRepository");

class AuthRepository extends BaseRepository {
  constructor(User) {
    super(User);
  }
}

module.exports = AuthRepository;
