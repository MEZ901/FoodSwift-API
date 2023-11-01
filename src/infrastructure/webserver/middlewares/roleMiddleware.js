const roleMiddleware = (roles) => (req, res, next) => {
  if (!req.user.roles.includes(roles)) {
    return res.status(422).json({ error: "Access Denied: Invalid Role" });
  }
  return next();
};

module.exports = roleMiddleware;
