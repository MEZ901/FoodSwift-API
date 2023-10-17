const { hashPassword } = require("../../../../utils/helpers");
const logger = require("../../../config/winston");
const User = require("../models/user");
const { faker } = require("@faker-js/faker");

module.exports = async (amount = 10) => {
  try {
    const users = [
      {
        name: "Admin",
        email: "admin@admin.com",
        password: await hashPassword("admin"),
        role: "manager",
        isVerified: true,
      },
    ];
    for (let i = 0; i < amount; i++) {
      users.push({
        name: faker.person.fullName(),
        email: faker.internet.email(),
        password: await hashPassword("password"),
        image: faker.image.avatarLegacy(),
        phoneNumber: faker.phone.number(),
        address: faker.location.streetAddress(),
        role: faker.helpers.arrayElement(["customer", "delivery"]),
        isVerified: true,
      });
    }
    await User.insertMany(users);
    logger.info(`${amount} users have been successfully seeded.`);
  } catch (error) {
    logger.error(error);
  }
};