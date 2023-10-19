const { hashPassword } = require("../../../../utils/helpers");
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
        roleName: "delivery",
        isVerified: true,
      });
    }

    return deliveries;
  } catch (error) {
    throw new Error(error);
  }
};
