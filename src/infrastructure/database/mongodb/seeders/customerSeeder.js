const { hashPassword } = require("../../../../utils/helpers");
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

    return customers;
  } catch (error) {
    throw new Error(error);
  }
};
