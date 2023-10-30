const nodeMailer = require("nodemailer");
const EmailGatewayInterface = require("../../application/interfaces/gateways/EmailGatewayInterface");
const environment = require("../../infrastructure/config/environment");

class EmailGatewayImpl extends EmailGatewayInterface {
  constructor() {
    super();
  }

  sendEmail = async (to, subject, body) => {
    try {
      const transporter = nodeMailer.createTransport({
        host: environment.email.HOST,
        port: environment.email.PORT,
        auth: {
          user: environment.email.AUTH.USER,
          pass: environment.email.AUTH.PASS,
        },
      });
      const mailOptions = {
        from: "foodswift@gmail.com",
        to,
        subject,
        html: body,
      };

      await transporter.sendMail(mailOptions);

      return true;
    } catch (error) {
      throw new Error(error);
    }
  };
}

module.exports = EmailGatewayImpl;
