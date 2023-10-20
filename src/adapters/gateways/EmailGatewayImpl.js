const EmailGatewayInterface = require("../../application/interfaces/gateways/EmailGatewayInterface");

class EmailGatewayImpl extends EmailGatewayInterface {
  constructor() {
    super();
  }

  sendEmail = async (to, subject, body) => {};
}

module.exports = EmailGatewayImpl;
