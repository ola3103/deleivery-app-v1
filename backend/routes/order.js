const express = require("express");
const router = express.Router();

const authController = require("../controller/auth");
const orderController = require("../controller/order");

router.post("/", authController.isLoggedIn, orderController.createOrder);
router.get("/", authController.isLoggedIn, orderController.getAllOrder);
router.get("/:id", authController.isLoggedIn, orderController.getSingleOrder);

module.exports = router;
