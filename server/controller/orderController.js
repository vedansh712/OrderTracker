const Order = require("../../database/model/order.model");
const User = require("../../database/model/user.model");

const addorder = async (req, res) => {
  const { user_id, order, phone } = req.body;
  try {
    if (!order) {
      res.status(400).send("Order is Require");
    }
    if (!phone) {
      res.status(400).send("Phone No is Require");
    }

    const orderdetail = await new Order({
      user_id,
      order,
      phone,
    });

    await orderdetail.save();
    res.status(200).send(orderdetail);
  } catch (error) {
    res.status(400).send("Error placing the order");
  }
};

const getallorders = async (req, res) => {
  const { id } = req.query;
  try {
    const orderlist = await Order.find({ user_id: id });
    res.status(200).send(orderlist);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return res.status(500).send("An error occurred while fetching orders.");
  }
};

module.exports = { addorder, getallorders };
