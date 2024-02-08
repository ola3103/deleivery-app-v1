const mongoose = require("mongoose");
const validator = require("validator");

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  address: {
    type: String,
    required: [true, "Please provide an address"],
  },
  landmark: String,
  phoneNo: {
    type: Number,
    required: [true, "Please provide a phone number"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    validate: {
      validator: validator.isEmail,
      message: (props) =>
        `${props.value} is not a valid email, please provide a valid email`,
    },
  },
});

const orderSchema = mongoose.Schema(
  {
    pickup: {
      type: locationSchema,
      required: true,
    },
    delivery: {
      type: locationSchema,
      required: true,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },

  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
