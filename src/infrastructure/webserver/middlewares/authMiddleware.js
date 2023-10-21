const { authServices } = require("../../../../container");

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ error: "Access Denied: No Token Provided" });
    }

    try {
        const decoded = authServices.verifyAccessToken(token);
        next();
    } catch (error) {
        res.status(401).json({ error: "Access Denied: Invalid Token" });
    }
};

module.exports = authMiddleware;
