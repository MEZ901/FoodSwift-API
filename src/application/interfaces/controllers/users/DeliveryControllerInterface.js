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
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of created delivery
   */
  createDelivery = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * get a delivery by ID
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of delivery
   */
  getDelivery = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * get all deliveries
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of deliveries
   */
  getAllDeliveries = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * update a delivery
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of updated delivery
   */
  updateDelivery = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };

  /**
   * delete a delivery
   * @param {object} req - request object
   * @param {object} res - response object
   * @returns {Promise<object>} - promise object of deleted delivery
   */
  deleteDelivery = async (req, res) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = DeliveryControllerInterface;
