const EmailGateway = require("../../application/interfaces/gateways/EmailGateway");

class EmailGatewayImpl extends EmailGateway {
  constructor() {
    super();
  }

  async sendEmail(to, subject, body) {
    // Send email using a third-party service
  }
}

module.exports = EmailGatewayImpl;
