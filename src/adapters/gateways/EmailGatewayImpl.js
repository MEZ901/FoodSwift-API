const EmailGatewayInterface = require("../../application/interfaces/gateways/EmailGatewayInterface");

class EmailGatewayImpl extends EmailGatewayInterface {
  constructor() {
    super();
  }

  async sendEmail(to, subject, body) {
    // Send email using a third-party service
  }
}

module.exports = EmailGatewayImpl;
