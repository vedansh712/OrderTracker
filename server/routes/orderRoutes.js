const express = require("express");
const router = express.Router();

const orderController = require("../controller/orderController");

router.route("/add-order").post(orderController.addorder);
router.route("/get-order").get(orderController.getallorders);

module.exports = router;
