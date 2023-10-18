const { hashPassword } = require("../../../../utils/helpers");
const logger = require("../../../config/winston");
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
        role: "customer",
        isVerified: true,
      });
    }
    await User.insertMany(customers);
    logger.info(`${amount} customers have been successfully seeded.`);
  } catch (error) {
    logger.error(error);
  }
};
