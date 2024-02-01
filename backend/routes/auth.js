const express = require("express");
const authController = require("../controller/auth");
const validatorMiddleware = require("../middleware/validatorMiddleware");

const router = express.Router();

router.post("/sign-up", validatorMiddleware.signUp, authController.signUpUser);
router.post("/sign-in", validatorMiddleware.signIn, authController.signInUser);

module.exports = router;
