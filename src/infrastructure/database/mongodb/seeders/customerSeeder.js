const UserRepoistory = require("../../../../adapters/repositories/UserRepository");
const { hashPassword } = require("../../../../utils/helpers");
const Role = require("../models/Role");
const User = require("../models/User");
const { faker } = require("@faker-js/faker");

module.exports = async (amount = 1) => {
  try {
    const customers = [];
    for (let i = 0; i < amount; i++) {
      customers.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: await hashPassword("password"),
        image: faker.image.avatarLegacy(),
        phoneNumber: faker.phone.number(),
        address: faker.location.streetAddress(),
        roleName: "customer",
        isVerified: true,
      });
    }
    const repository = new UserRepoistory(User, Role);
    return await repository.createMany(customers);
  } catch (error) {
    throw new Error(error);
  }
};
