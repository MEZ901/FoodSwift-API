const { userRepository } = require("../../../../../container");
const { authServices } = require("../../../../../container");
const { faker } = require("@faker-js/faker");

module.exports = async (amount = 1) => {
  try {
    const customers = [];

    for (let i = 0; i < amount; i++) {
      customers.push({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: await authServices.hashPassword("password"),
        image: faker.image.avatarLegacy(),
        phoneNumber: faker.phone.number(),
        address: faker.location.streetAddress(),
        roleNames: ["customer"],
        isVerified: true,
      });
    }

    return await userRepository.createMany(customers);
  } catch (error) {
    throw new Error(error);
  }
};
