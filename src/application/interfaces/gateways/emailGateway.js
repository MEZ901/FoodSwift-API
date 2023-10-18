/**
 * @interface
 */
class EmailGateway {
  constructor() {
    if (this.constructor === EmailGateway) {
      throw new Error(
        "EmailGateway is an interface and cannot be instantiated."
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
  async sendEmail(to, subject, body) {
    throw new Error("ERR_METHOD_NOT_IMPLEMENTED");
  }
}

module.exports = EmailGateway;
