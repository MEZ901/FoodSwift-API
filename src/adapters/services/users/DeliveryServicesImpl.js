const DeliveryServices = require("../../../application/interfaces/services/users/DeliveryServices");

class DeliveryServicesImpl extends DeliveryServices {
  constructor() {
    super();
  }

  async createDelivery(deliveryData) {}

  async createManyDeliveries(deliveriesData) {}

  async getDeliveryById(deliveryId) {}

  async updateDelivery(deliveryId, deliveryData) {}

  async deleteDelivery(deliveryId) {}
}

module.exports = DeliveryServicesImpl;
