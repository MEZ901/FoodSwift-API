/**
 * @interface
 */
class DeliveryControllerInterface {
  constructor() {
    if (this.constructor === DeliveryControllerInterface) {
      throw new Error(
        "DeliveryControllerInterface is an interface and cannot be instantiated."
      );
    }
  }

  /**
   * create a new delivery
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async createDelivery(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * get a delivery by ID
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async getDelivery(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * get all deliveries
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async getAllDeliveries(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * update a delivery
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async updateDelivery(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }

  /**
   * delete a delivery
   * @param {Object} req
   * @param {Object} res
   * @returns {Promise<void>}
   */
  async deleteDelivery(req, res) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = DeliveryControllerInterface;
