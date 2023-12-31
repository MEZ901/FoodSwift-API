const { userRepository } = require("../../../../../container");
const { authServices } = require("../../../../../container");
const { faker } = require("@faker-js/faker");

module.exports = async (amount = 1) => {
  try {
    const deliveries = [];

    for (let i = 0; i < amount; i++) {
      deliveries.push({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: await authServices.hashPassword("password"),
        image: faker.image.avatarLegacy(),
        phoneNumber: faker.phone.number(),
        address: faker.location.streetAddress(),
        roleNames: ["customer", "delivery"],
        isVerified: true,
      });
    }

    return await userRepository.createMany(deliveries);
  } catch (error) {
    throw new Error(error);
  }
};
