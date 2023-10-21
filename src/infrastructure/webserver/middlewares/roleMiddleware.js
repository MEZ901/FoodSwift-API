const roleMiddleware = (roles) => (req, res, next) => {
    if (!req.user.roles.includes(roles)) {
        res.status(403).json({ error: "Access Denied: Invalid Role" });
    }
    next();
};

module.exports = roleMiddleware;
