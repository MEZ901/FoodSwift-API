const { authServices } = require("../../../../container");

const authMiddleware = async (req, res, next) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    res.status(401).json({ error: "Access Denied: No Token Provided" });
  }

  const { status, ...rest } = await authServices.verifyAccessToken(
    access_token
  );

  if (status !== 200) {
    res.status(status).json({ ...rest });
  }

  req.user = { ...rest.payload };
  return next();
};

module.exports = authMiddleware;
