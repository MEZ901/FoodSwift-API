/**
 * @interface
 */
class DeliveryServices {
  constructor() {
    if (this.constructor === DeliveryServices) {
      throw new Error(
        "DeliveryServices is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * Creates a new delivery
   * @param {object} deliveryData - The data of the delivery to create
   * @returns {Promise<object>} - The created delivery object
   */
  async createDelivery(deliveryData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Creates many new deliveries
   * @param {object[]} deliveriesData - The data of the deliveries to create
   * @returns {Promise<object[]>} - The created deliveries objects
   */
  async createManyDeliveries(deliveriesData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Retrieves a delivery by their ID
   * @param {string} deliveryId - The ID of the delivery to retrieve
   * @returns {Promise<object>} - The retrieved delivery object
   */
  async getDeliveryById(deliveryId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Retrieves a delivery by their ID
   * @param {string} deliveryId - The ID of the delivery to retrieve
   * @returns {Promise<object>} - The retrieved delivery object
   */
  async updateDelivery(deliveryId, deliveryData) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * Deletes a delivery by their ID
   * @param {string} deliveryId - The ID of the delivery to delete
   * @returns {Promise<void>}
   */
  async deleteDelivery(deliveryId) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = DeliveryServices;
