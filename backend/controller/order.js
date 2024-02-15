const CustomError = require("../error/customError");
const Order = require("../model/order");

exports.createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user.userId });
  res.status(201).json({
    status: "success",
    message: "Order created successfully",
    data: {
      order,
    },
  });
};

exports.getAllOrder = async (req, res) => {
  const order = await Order.find({});

  res
    .status(200)
    .json({ status: "success", totalOrder: order.length, data: order });
};

exports.getSingleOrder = async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.id,
    user: req.user.userId,
  });

  if (!order) {
    throw new CustomError("Order cannot be found", 404);
  }

  res.status(200).json({ status: "success", data: order });
};

exports.deleteOrder = async (req, res) => {
  const order = await Order.findOneAndDelete({
    _id: req.params.id,
    user: req.user.userId,
  });

  res.status(204);
};
