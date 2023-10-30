const EmailServicesInterface = require("../../../application/interfaces/services/email/EmailServicesInterface");

class EmailServicesImpl extends EmailServicesInterface {
  constructor(emailGateway) {
    super();
    this.emailGateway = emailGateway;
  }

  createVerificationEmailTemplate = (token) => {
    return `
          <h1>Email Verification</h1>
          <p>Click this link to verify your email: <a href="http://localhost:8080/api/v1/auth/verify-email?token=${token}">Verify Email</a></p>
        `;
  };

  sendVerificationEmail = async (email, token) => {
    const subject = "Email Verification";
    const body = this.createVerificationEmailTemplate(token);

    const emailSent = await this.emailGateway.sendEmail(email, subject, body);

    if (!emailSent) return false;

    return true;
  };

  createResetPasswordEmailTemplate = (token) => {
    return `
          <h1>Reset Password</h1>
          <p>Click this link to reset your password: <a href="http://localhost:8080/api/v1/auth/reset-password?token=${token}">Reset Password</a></p>
        `;
  };

  sendResetPasswordEmail = async (email, token) => {
    const subject = "Reset Password";
    const body = this.createResetPasswordEmailTemplate(token);

    const emailSent = await this.emailGateway.sendEmail(email, subject, body);

    if (!emailSent) return false;

    return true;
  };
}

module.exports = EmailServicesImpl;
