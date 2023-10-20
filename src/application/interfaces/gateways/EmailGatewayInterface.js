/**
 * @interface
 */
class EmailGatewayInterface {
  constructor() {
    if (this.constructor === EmailGatewayInterface) {
      throw new Error(
        "EmailGatewayInterface is an interface and cannot be instantiated."
      );
    }
  }
  /**
   * Sends an email
   * @param {string} to - Email address of the recipient
   * @param {string} subject - Subject of the email
   * @param {string} body - Body of the email
   * @returns {Promise<void>} - Promise that resolves when the email is sent
   */
  sendEmail = async (to, subject, body) => {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  };
}

module.exports = EmailGatewayInterface;
