const express = require("express");
const router = express.Router();

const authController = require("../controller/authController");

router.route("/add-user").post(authController.register);
router.route("/login-user").post(authController.signin);

module.exports = router;
