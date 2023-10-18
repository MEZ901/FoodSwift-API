const { hashPassword } = require("../../../../utils/helpers");
const logger = require("../../../config/winston");
const User = require("../models/User");
const { faker } = require("@faker-js/faker");

module.exports = async (amount = 1) => {
  try {
    const deliveries = [];
    for (let i = 0; i < amount; i++) {
      deliveries.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: await hashPassword("password"),
        image: faker.image.avatarLegacy(),
        phoneNumber: faker.phone.number(),
        address: faker.location.streetAddress(),
        role: "delivery",
        isVerified: true,
      });
    }
    await User.insertMany(deliveries);
    logger.info(`${amount} deliveries have been successfully seeded.`);
  } catch (error) {
    logger.error(error);
  }
};
