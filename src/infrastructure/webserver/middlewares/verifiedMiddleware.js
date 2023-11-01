const verifiedMiddleware = async (req, res, next) => {
  if (!req.user.isVerified) {
    return res.status(422).json({ error: "Access Denied: Email not verified" });
  }
  return next();
};

module.exports = verifiedMiddleware;
