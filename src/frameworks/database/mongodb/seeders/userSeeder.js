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
      });
    }
    await User.insertMany(users);
    logger.info("User seeder done!");
  } catch (error) {
    logger.error(error);
  }
};
