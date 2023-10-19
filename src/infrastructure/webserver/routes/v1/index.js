const express = require("express");
const router = express.Router();

const authRouter = require("./auth/authRoutes");
const customerRouter = require("./users/customerRoutes");
const deliveryRouter = require("./users/deliveryRoutes");
const managerRouter = require("./users/managerRoutes");

router.use("/auth", authRouter);
router.use("/customer", customerRouter);
router.use("/delivery", deliveryRouter);
router.use("/manager", managerRouter);

module.exports = router;
