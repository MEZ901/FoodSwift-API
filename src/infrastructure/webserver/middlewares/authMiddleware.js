const { authServices } = require("../../../../container");

const authMiddleware = async (req, res, next) => {
  const { access_token } = req.cookies;

  if (!access_token) {
    res.status(401).json({ error: "Access Denied: No Token Provided" });
  }

  try {
    const decodedAccessToken = await authServices.verifyAccessToken(
      access_token
    );
    if (decodedAccessToken) {
      req.user = decodedAccessToken;
      return next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Access Denied: Invalid access token." });
  }
};

module.exports = authMiddleware;
